import { toDate } from "./to-date.js";

/**
 * Returns the number of minutes between two dates.
 *
 * This function takes two dates and calculates the number of minutes
 * between them. It returns the difference in minutes as an integer.
 *
 * @param {Date} date1 - The first date to compare.
 * @param {Date} date2 - The second date to compare.
 * @returns {number} - The number of minutes between the two dates.
 */
export function minutesBetween(
  date1: Date | string | number,
  date2: Date | string | number,
): number {
  const d1 = toDate(date1);
  const d2 = toDate(date2);

  if (!d1 || !d2) return 0;

  const timeDiff = Math.abs(d1.getTime() - d2.getTime());
  const diffMinutes = Math.ceil(timeDiff / (1000 * 60));
  return diffMinutes;
}
