import { useEffect, useState, type RefObject } from "react";

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /** Freeze state once visible (useful for one-time animations or lazy loading) */
  freezeOnceVisible?: boolean;
}

/**
 * Hook to observe the visibility of a DOM element within the viewport using IntersectionObserver.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const entry = useIntersectionObserver(ref, { threshold: 0.5 });
 * const isVisible = !!entry?.isIntersecting;
 *
 * @param ref The target React RefObject to observe.
 * @param options IntersectionObserver options.
 * @returns The latest IntersectionObserverEntry or null.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  options: UseIntersectionObserverOptions = {},
): IntersectionObserverEntry | null {
  const {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = typeof window !== "undefined" && !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([firstEntry]) => {
      setEntry(firstEntry);
    }, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}
