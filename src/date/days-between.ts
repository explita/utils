import { toDate } from "./to-date.js";

/**
 * Returns the number of days between two dates.
 *
 * @example
 * daysBetween("2024-01-01", "2024-01-10") // 9
 *
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns The absolute number of days between the two dates.
 */
export function daysBetween(
  date1: Date | string | number,
  date2: Date | string | number,
): number {
  const d1 = toDate(date1);
  const d2 = toDate(date2);

  if (!d1 || !d2) return 0;

  const timeDiff = Math.abs(d1.getTime() - d2.getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}
