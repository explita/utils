/**
 * Returns a new array with all duplicate elements removed.
 *
 * The function takes an array as an argument and returns a new array that contains
 * only unique elements from the input array. The order of elements is preserved.
 *
 * @example
 * uniqueArray([1, 2, 3, 2, 1]) // [1, 2, 3]
 *
 * @param {T[]} arr - The input array containing elements to be de-duplicated.
 * @returns {T[]} A new array containing only unique elements from the input array.
 * @throws {Error} Throws an error if the input is not an array.
 */
export function uniqueArray<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array as input");
  }

  return Array.from(new Set(arr));
}
