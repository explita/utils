/**
 * Checks if the given date is valid.
 *
 * Takes a date in any format that the Date constructor understands and
 * checks if it is valid. Returns true if the date is valid, false otherwise.
 *
 * @param {any} date - The date to check.
 * @returns {boolean} - `true` if the date is valid, `false` otherwise.
 */
export function isValidDate(date: any): boolean {
  return !isNaN(new Date(date).getTime());
}
