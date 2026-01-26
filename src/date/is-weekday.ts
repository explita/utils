import { isWeekend } from "./is-weekend.js";

/**
 * Checks if a given date is a weekday.
 *
 * This function takes a date object or a date string and returns a boolean
 * indicating whether the date is a weekday (Monday to Friday).
 *
 * @param {Date | string} date - The date to check.
 * @returns {boolean} `true` if the date is a weekday, `false` otherwise.
 * @throws {Error} Throws an error if the input date is invalid.
 */
export function isWeekday(date: Date | string): boolean {
  return !isWeekend(date);
}
