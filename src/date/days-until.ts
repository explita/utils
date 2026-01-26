import { toDate } from "./to-date.js";

/**
 * Returns the number of days until the given date from today.
 *
 * @example
 * daysUntil("2099-01-01") // > 27000
 *
 * @param date The date to calculate until.
 * @returns The number of days until the given date.
 */
export function daysUntil(date: Date | string | number | null): number {
  const d = toDate(date);
  if (!d) return 0;

  const today = new Date();
  if (d <= today) return 0;

  const timeDiff = d.getTime() - today.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}
