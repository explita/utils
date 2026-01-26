import { toDate } from "./to-date.js";

/**
 * Adds the given number of days to the given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftDays} instead.
 */
export function addDays(
  days: number,
  date: Date | string | number = new Date(),
): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

/**
 * Shifts the given date by a specified number of days and returns a new Date object.
 *
 * Can take both positive and negative values for days.
 *
 * @param {number} days - The number of days to add to the date.
 * @param {Date} [date=new Date()] - The date to add the days to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of days added.
 */
export function shiftDays(
  days: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftDays]: Invalid date");

  d.setDate(d.getDate() + days);
  return d;
}
