/**
 * Creates a throttled function that invokes the provided function at most once
 * every `limit` milliseconds. Subsequent calls to the throttled function will
 * be ignored until the specified time has passed.
 *
 * @param fn The function to throttle.
 * @param limit The number of milliseconds to throttle.
 * @returns A throttled function.
 */
export function throttle(fn: (...args: any[]) => void, limit: number) {
  let inThrottle = false;
  return (...args: any[]) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
