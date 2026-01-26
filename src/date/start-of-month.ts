import { toDate } from "./to-date.js";

/**
 * Returns the first moment of the month for the given date.
 *
 * @example
 * startOfMonth("2024-01-25") // 2024-01-01 00:00:00
 *
 * @param date The date to check.
 * @returns A new Date object set to the first day of the month at 00:00:00.
 */
export function startOfMonth(date: Date | string | number | null): Date {
  const d = toDate(date);
  if (!d) {
    throw new Error("Invalid date input");
  }

  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
}
