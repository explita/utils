import { toDate } from "./to-date.js";

/**
 * Retrieves the first date of the month for the given date.
 *
 * @example
 * firstDateOfMonth("2024-01-25") // 2024-01-01
 *
 * @param date The date to check. Defaults to the current date.
 * @returns A new Date object set to the first day of the month.
 */
export function firstDateOfMonth(
  date: Date | string | number | null = new Date(),
): Date {
  const d = toDate(date) || new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
