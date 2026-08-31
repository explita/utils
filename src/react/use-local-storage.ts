import { useState, useEffect, useCallback, useRef } from "react";

/**
 * useLocalStorage
 *
 * A hook to persist state in localStorage.
 *
 * @param key The key to use when storing the state in localStorage.
 * @param initialValue The initial value of the state to be stored.
 * @param options An object with the following optional properties:
 *   - serialize: A function to serialize the state. Defaults to JSON.stringify.
 *   - deserialize: A function to deserialize the state. Defaults to JSON.parse.
 * @returns An object with the stored value, a setter function, and a remove function.
 */
export type UseLocalStorageReturn<T> = {
  /** The stored value read from localStorage. */
  value: T;
  /**
   * Update the stored value in localStorage.
   * Accepts either a direct value or a function that receives the previous value.
   */
  setValue: (value: T | ((prev: T) => T)) => void;
  /** Remove the key from localStorage and reset to the initial value. */
  remove: () => void;
} & [T, (value: T | ((prev: T) => T)) => void, () => void];

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options?: {
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
  },
): UseLocalStorageReturn<T> {
  const { serialize = JSON.stringify, deserialize = JSON.parse } =
    options || {};

  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [key, initialValue, deserialize]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Keep a ref to the latest storedValue to avoid stale closures
  // in the functional updater pattern
  const storedValueRef = useRef(storedValue);
  storedValueRef.current = storedValue;

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (typeof window === "undefined") {
        console.warn(
          `Tried setting localStorage key “${key}” even though environment is not a client`,
        );
        return;
      }

      try {
        const newValue =
          typeof value === "function"
            ? (value as (prev: T) => T)(storedValueRef.current)
            : value;
        window.localStorage.setItem(key, serialize(newValue));
        setStoredValue(newValue);

        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event("local-storage"));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, serialize],
  );

  // Keep refs for the event listener so it never needs to re-attach
  const keyRef = useRef(key);
  keyRef.current = key;
  const readValueRef = useRef(readValue);
  readValueRef.current = readValue;

  useEffect(() => {
    const handleStorageChange = (event: Event) => {
      if (
        (event as StorageEvent).key &&
        (event as StorageEvent).key !== keyRef.current
      ) {
        return;
      }
      setStoredValue(readValueRef.current());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, []);

  /**
   * Remove
   */
  const remove = useCallback(() => {
    if (typeof window === "undefined") {
      console.warn(
        `Tried removing localStorage key "${key}" even though environment is not a client`,
      );
      return;
    }

    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return Object.assign([storedValue, setValue, remove], {
    value: storedValue,
    setValue,
    remove,
  }) as UseLocalStorageReturn<T>;
}
