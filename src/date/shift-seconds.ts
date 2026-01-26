import { toDate } from "./to-date.js";

/**
 * Adds the specified number of seconds to a given date and returns a new Date object.
 *
 * @deprecated Use {@link shiftSeconds} instead.
 */
export function addSeconds(seconds: number, date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setSeconds(newDate.getSeconds() + seconds);
  return newDate;
}

/**
 * Shifts the given date by a specified number of seconds and returns a new Date object.
 *
 * Can take both positive and negative values for seconds.
 *
 * @param {number} seconds - The number of seconds to add to the date.
 * @param {Date} [date=new Date()] - The date to add the seconds to. Defaults to the current date.
 * @returns {Date} - A new Date object with the given number of seconds added.
 */
export function shiftSeconds(
  seconds: number,
  date: Date | string | number = new Date(),
): Date {
  let d = toDate(date);
  if (!d) throw new Error("[shiftSeconds]: Invalid date");

  d.setSeconds(d.getSeconds() + seconds);
  return d;
}
