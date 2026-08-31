import { useEffect, type RefObject } from "react";

/**
 * Hook that alerts clicks or touches outside of the passed ref.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useOnClickOutside(ref, () => setIsOpen(false));
 *
 * @param ref The React RefObject of the element to detect outside clicks for.
 * @param handler Callback invoked when a click/touch outside occurs.
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
