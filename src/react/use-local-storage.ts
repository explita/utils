import { useState, useEffect, useCallback } from "react";

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
 * @returns A tuple with the stored value and a function to update the stored value.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options?: {
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
  },
) {
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

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (typeof window === "undefined") {
        console.warn(
          `Tried setting localStorage key “${key}” even though environment is not a client`,
        );
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, serialize(newValue));
        setStoredValue(newValue);

        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event("local-storage"));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, serialize, storedValue],
  );

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    };

    window.addEventListener("storage", handleStorageChange as EventListener);
    window.addEventListener(
      "local-storage",
      handleStorageChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange as EventListener,
      );
      window.removeEventListener(
        "local-storage",
        handleStorageChange as EventListener,
      );
    };
  }, [key, readValue]);

  return [storedValue, setValue] as const;
}
