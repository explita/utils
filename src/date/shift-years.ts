import { toDate } from "./to-date.js";

/**
 * Adds the given number of years to the given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftYears} instead.
 */
export function addYears(years: number, date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

/**
 * Shifts the given date by a specified number of years and returns a new Date object.
 *
 * Can take both positive and negative values for years.
 *
 * @param {number} years - The number of years to add to the date.
 * @param {Date} [date=new Date()] - The date to add the years to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of years added.
 */
export function shiftYears(
  years: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftYears]: Invalid date");

  d.setFullYear(d.getFullYear() + years);
  return d;
}
