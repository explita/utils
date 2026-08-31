import { toDate } from "./to-date.js";

/**
 * Returns a new Date object set to the end of the day (23:59:59.999) of the given date.
 *
 * @param date The date to get the end of the day for.
 * @returns A new Date object representing the end of the day.
 */
export function endOfDay(date: Date | string | number = new Date()): Date {
  const d = toDate(date);
  if (!d) throw new Error("Invalid date input");

  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
}
