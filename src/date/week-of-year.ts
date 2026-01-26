import { isValidDate } from "./is-valid.js";
import { toDate } from "./to-date.js";

/**
 * Retrieves the week of the year from a given date.
 *
 * @param {Date | FixedDate | null} date - The date to retrieve the week from. Defaults to the current date.
 * @returns {number} The week of the year (1-52) as per ISO 8601.
 */
export function weekOfYear(
  date: Date | string | number | null | undefined = new Date(),
): number {
  let d = toDate(date);
  if (!d) return 0;

  const start = new Date(d.getFullYear(), 0, 1);
  const diff = d.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  const week = Math.floor(day / 7);

  return week + 1;
}
