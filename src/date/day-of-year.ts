import { toDate } from "./to-date.js";

/**
 * Retrieves the day of the year from a given date.
 *
 * @example
 * dayOfYear("2024-01-01") // 1
 * dayOfYear("2024-12-31") // 366 (leap year)
 *
 * @param date The date to retrieve the day from. Defaults to the current date.
 * @returns The day of the year (1-366).
 */
export function dayOfYear(
  date: Date | string | number | null = new Date(),
): number {
  const d = toDate(date) || new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
