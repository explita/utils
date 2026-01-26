import { toDate } from "./to-date.js";

/**
 * Checks if a given date is a weekend.
 *
 * This function takes a date object or a date string and returns a boolean
 * indicating whether the date is a weekend (Saturday or Sunday).
 *
 * @param {Date | string} date - The date to check.
 * @returns {boolean} `true` if the date is a weekend, `false` otherwise.
 * @throws {Error} Throws an error if the input date is invalid.
 */
export function isWeekend(date: Date | string): boolean {
  const d = toDate(date);

  if (!d) {
    throw new Error("Invalid date input");
  }

  const day = d.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  return day === 0 || day === 6;
}
