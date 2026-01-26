/**
 * Splits a number or string into chunks of a specified size, separated by a specified separator.
 *
 * @param {number|string} data - The number or string to split into chunks.
 * @param {number} [groupSize=3] - The size of each chunk (default is 3).
 * @param {string} [separator=" "] - The string used to separate chunks (default is a space).
 * @returns {string} - The resulting string with chunks separated by the specified separator.
 *
 * @example
 * chunkSplit(123456789, 3, ",") // "123,456,789"
 */
export function chunkSplit(
  data: number | string,
  groupSize: number = 3,
  separator: string = " ",
): string {
  const numberString = data.toString();

  const groups: string[] = [];
  for (let i = numberString.length; i > 0; i -= groupSize) {
    groups.unshift(numberString.slice(Math.max(0, i - groupSize), i));
  }

  return groups.join(separator);
}
