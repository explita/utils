import { toDate } from "./to-date.js";

/**
 * Retrieves the last date of the month for the given date.
 *
 * @example
 * lastDateOfMonth("2024-02-01") // 2024-02-29
 *
 * @param date The date to check. Defaults to the current date.
 * @returns A new Date object set to the last day of the month.
 */
export function lastDateOfMonth(
  date: Date | string | number | null = new Date(),
): Date {
  const d = toDate(date) || new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
