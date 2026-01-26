import { toDate } from "./to-date.js";

/**
 * Returns the number of hours between two dates.
 *
 * This function takes two dates and calculates the number of hours
 * between them. The returned value is an integer and is always
 * positive (i.e., the order of the dates does not matter).
 */
export function hoursBetween(
  date1: Date | string | number,
  date2: Date | string | number,
): number {
  const d1 = toDate(date1);
  const d2 = toDate(date2);

  if (!d1 || !d2) return 0;

  const timeDiff = Math.abs(d1.getTime() - d2.getTime());
  const diffHours = Math.ceil(timeDiff / (1000 * 3600));
  return diffHours;
}
