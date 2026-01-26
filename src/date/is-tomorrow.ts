import { toDate } from "./to-date.js";

/**
 * Returns true if the given date is tomorrow, false otherwise.
 *
 * @param {Date} date The date to check.
 * @returns {boolean} True if the given date is tomorrow.
 */
export function isTomorrow(date: Date | string | number): boolean {
  const d = toDate(date);
  if (!d) return false;

  const today = new Date();
  today.setDate(today.getDate() + 1);

  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}
