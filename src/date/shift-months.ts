import { toDate } from "./to-date.js";

/**
 * Adds the given number of months to the given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftMonths} instead.
 */
export function addMonths(months: number, date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Shifts the given date by a specified number of months and returns a new Date object.
 *
 * Can take both positive and negative values for months.
 *
 * @param {number} months - The number of months to add to the date.
 * @param {Date} [date=new Date()] - The date to add the months to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of months added.
 */
export function shiftMonths(
  months: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftMonths]: Invalid date");

  d.setMonth(d.getMonth() + months);
  return d;
}
