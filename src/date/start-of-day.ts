import { toDate } from "./to-date.js";

/**
 * Returns a new Date object set to the start of the day (00:00:00) of the given date.
 * This is useful for comparing dates without considering the time component.
 *
 * @param date The date to get the start of the day for.
 * @returns A new Date object representing the start of the day.
 */
export function startOfDay(date: Date | string | number = new Date()): Date {
  const d = toDate(date);
  if (!d) throw new Error("Invalid date input");

  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}
