import { toDate } from "./to-date.js";

/**
 * Returns the month of the given date (1-12).
 *
 * @example
 * getMonth("2024-01-25") // 1
 *
 * @param date The date to extract the month from.
 * @returns The month (1-12).
 */
export function getMonth(
  date: Date | string | number | null = new Date(),
): number {
  const d = toDate(date) || new Date();
  return d.getMonth() + 1;
}
