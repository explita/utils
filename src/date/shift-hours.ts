import { toDate } from "./to-date.js";

/**
 * Adds the given number of hours to the given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftHours} instead.
 */
export function addHours(hours: number, date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
}

/**
 * Shifts the given date by a specified number of hours and returns a new Date object.
 *
 * Can take both positive and negative values for hours.
 *
 * @param {number} hours - The number of hours to add to the date.
 * @param {Date} [date=new Date()] - The date to add the hours to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of hours added.
 */
export function shiftHours(
  hours: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftHours]: Invalid date");

  d.setHours(d.getHours() + hours);
  return d;
}
