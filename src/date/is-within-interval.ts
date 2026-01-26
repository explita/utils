import { toDate } from "./to-date.js";
import { normalizeDate } from "./normalize.js";

/**
 * Checks if a given date is within the given interval.
 *
 * This function takes a target date and an object with start and end dates, and
 * returns a boolean indicating whether the target date is within the given
 * interval. If the `ignoreTime` option is set to true, the function will ignore
 * the time of the dates and only compare the dates.
 *
 * If the target date or either of the start or end dates is invalid, the function
 * throws an error.
 *
 * @param {Date | string} target - The date to check.
 * @param {object} options - An object with the start and end dates, and an
 * optional `ignoreTime` flag.
 * @param {Date | string} options.start - The start date of the interval.
 * @param {Date | string} options.end - The end date of the interval.
 * @param {boolean} [options.ignoreTime=false] - If true, the time of the dates
 * will be ignored.
 * @returns {boolean} `true` if the target date is within the given interval.
 * @throws {Error} Throws an error if the target date or either of the start or
 * end dates is invalid.
 */
export function isWithinInterval(
  target: Date | string | number,
  options: {
    start: Date | string | number;
    end: Date | string | number;
    ignoreTime?: boolean;
  },
): boolean {
  let targetDate = toDate(target);
  let startDate = toDate(options.start);
  let endDate = toDate(options.end);

  if (!targetDate || !startDate || !endDate) {
    throw new Error("Invalid date input");
  }

  if (options.ignoreTime) {
    targetDate = normalizeDate(targetDate);
    startDate = normalizeDate(startDate);
    endDate = normalizeDate(endDate);
  }

  return targetDate >= startDate && targetDate <= endDate;
}
