import { toDate } from "./to-date.js";

/**
 * Extracts and normalizes the date part (00:00:00) from a given input.
 *
 * @param date The date to extract from.
 * @returns A Date object with the time part set to 0.
 */
export function normalizeDate(date: Date | string | number | null): Date {
  const d = toDate(date);
  if (!d) {
    throw new Error("Invalid date input");
  }

  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}
