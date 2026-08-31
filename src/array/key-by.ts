/**
 * Creates an object composed of keys generated from the specified property of each element.
 *
 * @example
 * const users = [{ id: 'a', name: 'Alice' }, { id: 'b', name: 'Bob' }];
 * keyBy(users, 'id') // { a: { id: 'a', name: 'Alice' }, b: { id: 'b', name: 'Bob' } }
 */
export function keyBy<T extends Record<string, any>, K extends keyof T>(
  array: readonly T[],
  key: K,
): Record<string, T> {
  if (!Array.isArray(array)) return {};

  return array.reduce((acc, item) => {
    if (item && item[key] !== undefined && item[key] !== null) {
      acc[String(item[key])] = item;
    }
    return acc;
  }, {} as Record<string, T>);
}
