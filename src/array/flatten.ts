/**
 * Flattens an array of arrays into a single array.
 *
 * @example
 * flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]
 * flatten([1, [2, [3, 4]]]) // [1, 2, 3, 4]
 */
export function flatten<T>(arr: readonly any[]): T[] {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input");
  }

  return arr.flat(Infinity) as T[];
}
