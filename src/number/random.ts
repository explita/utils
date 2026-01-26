/**
 * Generates a random number with a specified length.
 *
 * @param {number} [length=8] The length of the random number to generate.
 * @returns {number} A random number with the specified length.
 */
export function randomNumber(length: number = 8): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
