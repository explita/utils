import { toDate } from "./to-date.js";

/**
 * Returns the day of the month for the given date (1-31).
 *
 * @example
 * getDay("2024-01-25") // 25
 *
 * @param date The date to extract the day from.
 * @returns The day of the month (1-31).
 */
export function getDay(
  date: Date | string | number | null = new Date(),
): number {
  const d = toDate(date) || new Date();
  return d.getDate();
}
