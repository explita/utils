import { toDate } from "./to-date.js";

/**
 * Returns the number of seconds between two dates
 * @param a - The earlier date (Date or ISO string)
 * @param b - The later date (Date or ISO string)
 * @returns Number of seconds (always positive)
 */
export function secondsBetween(
  a: Date | string | number,
  b: Date | string | number,
): number {
  const d1 = toDate(a);
  const d2 = toDate(b);

  if (!d1 || !d2) return 0;

  const dateA = d1.getTime();
  const dateB = d2.getTime();
  return Math.floor(Math.abs(dateB - dateA) / 1000);
}
