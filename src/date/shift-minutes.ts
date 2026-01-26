import { toDate } from "./to-date.js";

/**
 * Adds the given number of minutes to the given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftMinutes} instead.
 */
export function addMinutes(minutes: number, date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
}

/**
 * Shifts the given date by a specified number of minutes and returns a new Date object.
 *
 * Can take both positive and negative values for minutes.
 *
 * @param {number} minutes - The number of minutes to add to the date.
 * @param {Date} [date=new Date()] - The date to add the minutes to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of minutes added.
 */
export function shiftMinutes(
  minutes: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftMinutes]: Invalid date");

  d.setMinutes(d.getMinutes() + minutes);
  return d;
}
