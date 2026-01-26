import { toDate } from "./to-date.js";

/**
 * Checks if the given date is today.
 *
 * @example
 * isToday(new Date()) // true
 *
 * @param date The date to check.
 * @returns True if the date is today, false otherwise.
 */
export function isToday(date: Date | string | number | null): boolean {
  const d = toDate(date);
  if (!d) return false;

  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}
