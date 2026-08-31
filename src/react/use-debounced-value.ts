import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Configuration options for the useDebouncedValue hook
 */
interface DebouncedValueOptions {
  /** Debounce delay in milliseconds (default: 500) */
  delay?: number;
  /**
   * Minimum length required for string values to update debounced state (default: 3).
   * Only applies to string values. Non-string values always update.
   */
  minLength?: number;
}

/**
 * Type definition for the return value of the useDebouncedValue hook
 */
type DebouncedValue<T> = readonly [
  /**
   * The current value of the debounced state
   */
  value: T,

  /**
   * The debounced value that updates after the delay
   */
  debounced: T,

  /**
   * Function to update the value
   */
  setValue: (val: T | ((val: T) => T)) => void,

  /**
   * Function to force an immediate update of the debounced value
   */
  flush: () => void,
];

/**
 * A hook that debounces a value with optional minimum length constraint for strings.
 *
 * @template T - The type of the value being debounced
 * @param initialValue - The initial value for both the immediate and debounced state (defaults to empty string for type T)
 * @param delayOrOptions - Either a number (delay in ms) or an options object
 *
 * @returns A tuple containing:
 *   - [0] immediateValue: Updates instantly on every change
 *   - [1] debouncedValue: Updates after the delay
 *   - [2] setValue: Function to update the immediate value
 *   - [3] flush: Function to force an immediate update of the debounced value
 *
 * @example
 * // Basic usage with defaults (500ms delay, minLength 3)
 * const [search, debouncedSearch, setSearch, flush] = useDebouncedValue("");
 *
 * @example
 * // Custom delay
 * const [search, debouncedSearch, setSearch] = useDebouncedValue("", 300);
 *
 * @example
 * // With options object
 * const [search, debouncedSearch, setSearch] = useDebouncedValue("", {
 *   delay: 500,
 *   minLength: 2
 * });
 *
 * @example
 * // With flush for manual search
 * const SearchComponent = () => {
 *   const [search, debouncedSearch, setSearch, flush] = useDebouncedValue("", 500);
 *
 *   useEffect(() => {
 *     if (debouncedSearch) {
 *       fetchResults(debouncedSearch);
 *     }
 *   }, [debouncedSearch]);
 *
 *   const handleManualSearch = () => {
 *     flush(); // Immediately update debounced value
 *     searchAPI(search);
 *   };
 *
 *   return (
 *     <>
 *       <input value={search} onChange={(e) => setSearch(e.target.value)} />
 *       <button onClick={handleManualSearch}>Search</button>
 *     </>
 *   );
 * };
 */
export function useDebouncedValue<T = string>(
  initialValue: T,
  delayOrOptions?: number | DebouncedValueOptions,
): DebouncedValue<T> {
  let delay = 500;
  let minLength = 3;

  if (typeof delayOrOptions === "number") {
    delay = delayOrOptions;
  } else if (delayOrOptions && typeof delayOrOptions === "object") {
    delay = delayOrOptions.delay ?? 500;
    minLength = delayOrOptions.minLength ?? 3;
  }

  const [value, setValue] = useState<T>(initialValue);
  const [debounced, setDebounced] = useState<T>(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const valueRef = useRef<T>(initialValue);

  const handleValueChange = useCallback(
    (val: T | ((val: T) => T)) => {
      const newVal =
        typeof val === "function"
          ? (val as (prev: T) => T)(valueRef.current)
          : val;
      setValue(newVal);
      valueRef.current = newVal;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        // Apply minLength constraint only for string values
        if (typeof newVal === "string") {
          setDebounced((newVal.length >= minLength ? newVal : "") as T);
        } else {
          setDebounced(newVal);
        }
      }, delay);
    },
    [delay, minLength],
  );

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setDebounced(valueRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [value, debounced, handleValueChange, flush] as const;
}
