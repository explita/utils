import { startOfDay } from "./start-of-day.js";
import { toDate } from "./to-date.js";

/**
 * Extracts and returns the date portion of a Date object as a string in YYYY-MM-DD format.
 *
 * @example
 * extractDate(new Date("2024-01-25T14:30:00")) // "2024-01-25"
 *
 * @param date The date to extract from.
 * @returns The date string.
 */
export function extractDate(
  date: Date | string | number | null = new Date(),
): string {
  const d = toDate(date);

  if (!d) throw new Error("[extractDate]: Invalid date");

  return startOfDay(d).toISOString().slice(0, 10);
}
