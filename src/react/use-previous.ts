import { useEffect, useRef } from "react";

/**
 * Hook that tracks the previous value of a state or prop.
 *
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 *
 * @param value The value to track.
 * @returns The previous value from the preceding render.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
