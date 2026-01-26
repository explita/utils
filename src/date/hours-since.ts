import { toDate } from "./to-date.js";

/**
 * Calculates the number of hours since the given date.
 *
 * @param {Date} date - The date to calculate the hours since.
 * @returns {number} The number of hours since the given date.
 */
export function hoursSince(date: Date | string | number): number {
  const d = toDate(date);
  if (!d) return 0;

  const today = new Date();

  if (d >= today) return 0;

  const timeDiff = Math.abs(today.getTime() - d.getTime());
  const diffHours = Math.ceil(timeDiff / (1000 * 3600));
  return diffHours;
}
