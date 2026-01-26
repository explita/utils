import { toDate } from "./to-date.js";

/**
 * Retrieves the number of days in the month of the given date.
 *
 * @example
 * daysInMonth("2024-02-01") // 29 (leap year)
 * daysInMonth("2023-02-01") // 28
 *
 * @param date The date to check. Defaults to the current date.
 * @returns The number of days in the month.
 */
export function daysInMonth(
  date: Date | string | number | null = new Date(),
): number {
  const d = toDate(date) || new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}
