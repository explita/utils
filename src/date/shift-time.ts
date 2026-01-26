import { toDate } from "./to-date.js";

/**
 * Adjusts a given date by a specified amount of time.
 *
 * This function allows you to shift a date by a specific number of years, months, weeks, days, hours, minutes, and seconds.
 * You can specify any combination of these time units, and the function will return a new Date object with the adjustments applied.
 *
 * @param {Object} timeUnits - An object containing the time units to adjust.
 * @param {number} [timeUnits.years=0] - The number of years to add to the date.
 * @param {number} [timeUnits.months=0] - The number of months to add to the date.
 * @param {number} [timeUnits.weeks=0] - The number of weeks to add to the date.
 * @param {number} [timeUnits.days=0] - The number of days to add to the date.
 * @param {number} [timeUnits.hours=0] - The number of hours to add to the date.
 * @param {number} [timeUnits.minutes=0] - The number of minutes to add to the date.
 * @param {number} [timeUnits.seconds=0] - The number of seconds to add to the date.
 * @param {Date} [baseDate=new Date()] - The base date to adjust. Defaults to the current date and time.
 * @returns {Date} A new Date object with the specified time adjustments applied.
 */
export function shiftTime(
  {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  }: Partial<
    Record<
      "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds",
      number
    >
  >,
  baseDate: Date | string | number = new Date(),
): Date {
  let date = toDate(baseDate);
  if (!date) throw new Error("[shiftTime]: Invalid date");

  if (years) date.setFullYear(date.getFullYear() + years);
  if (months) date.setMonth(date.getMonth() + months);
  if (weeks) date.setDate(date.getDate() + weeks * 7);
  if (days) date.setDate(date.getDate() + days);
  if (hours) date.setHours(date.getHours() + hours);
  if (minutes) date.setMinutes(date.getMinutes() + minutes);
  if (seconds) date.setSeconds(date.getSeconds() + seconds);

  return date;
}
