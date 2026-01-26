/**
 * Creates a new object excluding the specified keys from the original object.
 *
 * @example
 * omitFromObject({ a: 1, b: 2, c: 3 }, ["b"]) // { a: 1, c: 3 }
 *
 * @param obj The original object.
 * @param keys An array of keys to omit.
 * @returns A new object excluding the omitted keys.
 */
export function omitFromObject<
  T extends Record<string, any>,
  K extends keyof T,
>(obj: T | null | undefined, keys: K[]): Omit<T, K> {
  if (!obj) return {} as Omit<T, K>;

  const result = { ...obj };
  keys.forEach((key) => {
    if (key in result) {
      delete result[key];
    }
  });

  return result;
}
