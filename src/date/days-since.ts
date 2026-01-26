import { toDate } from "./to-date.js";

/**
 * Returns the number of days since the given date.
 * If the given date is in the future, it returns 0.
 *
 * @example
 * daysSince("2000-01-01") // > 8000
 *
 * @param date The date to calculate from.
 * @returns The number of days since the given date.
 */
export function daysSince(date: Date | string | number | null): number {
  const d = toDate(date);
  if (!d) return 0;

  const today = new Date();
  if (d >= today) return 0;

  const timeDiff = today.getTime() - d.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}
