import { toDate } from "./to-date.js";

/**
 * Checks if a given date is yesterday.
 *
 * This function determines whether the provided date corresponds to the day
 * before the current date. It returns true if the date is yesterday, otherwise
 * it returns false.
 *
 * @param {Date} date - The date to check.
 * @returns {boolean} - `true` if the date is yesterday, `false` otherwise.
 */
export function isYesterday(date: Date | string | number): boolean {
  const d = toDate(date);
  if (!d) return false;

  const today = new Date();
  today.setDate(today.getDate() - 1);

  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}
