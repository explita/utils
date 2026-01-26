/**
 * Groups an array of objects by the specified key.
 *
 * @example
 * const input = [
 *   { id: 1, category: 'a' },
 *   { id: 2, category: 'a' },
 *   { id: 3, category: 'b' },
 * ];
 *
 * const result = groupBy(input, 'category');
 * // result will be { a: [{ id: 1 }, { id: 2 }], b: [{ id: 3 }] }
 */
export function groupBy<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K,
): Record<T[K], T[]> {
  return array.reduce(
    (acc, item) => {
      const groupKey = item[key];
      if (groupKey !== undefined) {
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
      }
      return acc;
    },
    {} as Record<T[K], T[]>,
  );
}
