import { toDate } from "./to-date.js";

/**
 * Get the lowest date from an array of dates.
 *
 * @param arr - Array of dates (Date objects, date strings, or timestamps)
 * @returns Lowest Date or null if array is empty or contains no valid dates
 */
export function minDate(
  arr: (Date | string | number | null | undefined)[],
): Date | null {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const validTimestamps = arr
    .map((d) => toDate(d)?.getTime())
    .filter((t): t is number => typeof t === "number" && !isNaN(t));

  if (validTimestamps.length === 0) return null;

  return new Date(Math.min(...validTimestamps));
}
