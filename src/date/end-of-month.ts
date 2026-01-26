import { toDate } from "./to-date.js";

/**
 * Returns the last moment of the month for the given date.
 *
 * @example
 * endOfMonth("2024-01-25") // 2024-01-31 23:59:59.999
 *
 * @param date The date to check.
 * @returns A new Date object set to the last moment of the month.
 */
export function endOfMonth(date: Date | string | number | null): Date {
  const d = toDate(date);
  if (!d) {
    throw new Error("Invalid date input");
  }

  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}
