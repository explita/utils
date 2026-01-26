/**
 * Creates a new object containing only the specified keys from the original object.
 *
 * @example
 * pickFromObject({ a: 1, b: 2, c: 3 }, ["a", "c"]) // { a: 1, c: 3 }
 *
 * @param obj The original object.
 * @param keys An array of keys to pick.
 * @returns A new object with only the picked keys.
 */
export function pickFromObject<
  T extends Record<string, any>,
  K extends keyof T,
>(obj: T | null | undefined, keys: K[]): Pick<T, K> {
  if (!obj) return {} as Pick<T, K>;

  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}
