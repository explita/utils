import { toDate } from "./to-date.js";

/**
 * Calculates the number of hours until the given date.
 *
 * @param {Date} date - The date to calculate the hours until.
 * @returns {number} The number of hours until the given date.
 */
export function hoursUntil(date: Date | string | number): number {
  const d = toDate(date);
  if (!d) return 0;

  const today = new Date();

  if (d <= today) return 0;

  const timeDiff = Math.abs(d.getTime() - today.getTime());
  const diffHours = Math.ceil(timeDiff / (1000 * 3600));
  return diffHours;
}
