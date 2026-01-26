/**
 * Converts a file size in bytes to a human-readable string format.
 *
 * This function takes a file size in bytes and converts it to the
 * most appropriate unit (Bytes, KB, MB, or GB) with a specified
 * number of decimal places.
 *
 * @param {number} sizeInBytes - The file size in bytes to be converted.
 * @param {number} [decimalPlaces=1] - The number of decimal places for the formatted size.
 * @returns {string} A string representing the file size in a human-readable format.
 *
 * @example
 * convertFileSize(1024) // "1.0 KB"
 * convertFileSize(1048576, 2) // "1.00 MB"
 */
export function convertFileSize(
  sizeInBytes: number,
  decimalPlaces: number = 1,
): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} Bytes`;
  } else if (sizeInBytes < 1024 ** 2) {
    return `${(sizeInBytes / 1024).toFixed(decimalPlaces)} KB`;
  } else if (sizeInBytes < 1024 ** 3) {
    return `${(sizeInBytes / 1024 ** 2).toFixed(decimalPlaces)} MB`;
  } else {
    return `${(sizeInBytes / 1024 ** 3).toFixed(decimalPlaces)} GB`;
  }
}
