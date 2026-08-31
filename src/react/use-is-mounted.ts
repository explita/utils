import { useCallback, useEffect, useRef } from "react";

/**
 * Hook that returns a function that tells if the component is currently mounted.
 * Useful to avoid calling setState on unmounted components after async actions.
 *
 * @example
 * const isMounted = useIsMounted();
 * useEffect(() => {
 *   fetchData().then((res) => {
 *     if (isMounted()) setState(res);
 *   });
 * }, []);
 *
 * @returns A function returning boolean: true if mounted, false otherwise.
 */
export function useIsMounted(): () => boolean {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return useCallback(() => isMountedRef.current, []);
}
