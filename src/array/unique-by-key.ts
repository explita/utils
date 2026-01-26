/**
 * Returns a new array with all duplicate elements removed, based on the specified key.
 *
 * @example
 * const array = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 1, name: 'John' },
 * ];
 * const result = uniqueArrayByKey(array, 'id');
 * // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 */
export function uniqueArrayByKey<T>(
  array: readonly T[] | null | undefined,
  key: keyof T,
): T[] {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const map = new Map();
  for (const item of array) {
    const keyValue = item[key];
    if (!map.has(keyValue)) {
      map.set(keyValue, item);
    }
  }

  return Array.from(map.values());
}
