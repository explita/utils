/**
 * Returns a new array with its elements shuffled in a random order using the Fisher-Yates algorithm.
 *
 * @example
 * shuffleArray([1, 2, 3])
 * // Output: [2, 3, 1] or [3, 1, 2] or [1, 3, 2], etc.
 */
export function shuffleArray<T>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    throw new Error("Expected an array as input");
  }

  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
