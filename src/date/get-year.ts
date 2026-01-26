import { toDate } from "./to-date.js";

/**
 * Returns the year of the given date.
 *
 * @example
 * getYear("2024-01-25") // 2024
 *
 * @param date The date to extract the year from.
 * @returns The year (e.g., 2024).
 */
export function getYear(
  date: Date | string | number | null = new Date(),
): number {
  const d = toDate(date) || new Date();
  return d.getFullYear();
}
