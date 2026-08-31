/**
 * Creates a function that memoizes the result of `fn`.
 *
 * @example
 * const expensive = memoize((x: number) => x * 2);
 * expensive(5); // computes 10
 * expensive(5); // returns cached 10
 *
 * @param fn The function to memoize.
 * @param keyResolver Optional function to compute the cache key from arguments.
 * @returns The memoized function with a `.cache` property.
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  keyResolver?: (...args: Parameters<T>) => string,
): T & { cache: Map<string, ReturnType<T>> } {
  const cache = new Map<string, ReturnType<T>>();

  const memoized = function (this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = keyResolver ? keyResolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  } as T & { cache: Map<string, ReturnType<T>> };

  memoized.cache = cache;
  return memoized;
}
