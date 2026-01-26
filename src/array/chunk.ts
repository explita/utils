/**
 * Chunks an array into smaller arrays of the specified size.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (!Array.isArray(array)) {
    throw new Error("Expected an array as input");
  }

  if (typeof size !== "number" || size <= 0) {
    throw new Error("Size must be a positive number");
  }

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
