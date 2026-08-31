import { useState, useEffect } from "react";

/**
 * Hook to match a CSS media query string reactively.
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const isDark = useMediaQuery("(prefers-color-scheme: dark)");
 *
 * @param query The media query string to evaluate.
 * @returns Boolean indicating whether the media query currently matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    } else {
      // Legacy browser support
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
    }
  }, [query]);

  return matches;
}
