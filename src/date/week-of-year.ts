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
  const d = toDate(date);
  if (!d) return 0;

  // Create a copy to avoid mutating the original date
  const tempDate = new Date(d.getTime());

  // ISO week date helper: Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  const dayNum = (d.getDay() + 6) % 7;
  tempDate.setDate(tempDate.getDate() - dayNum + 3);

  // Get first Thursday of year
  const firstThursday = tempDate.getTime();
  tempDate.setMonth(0, 1);
  if (tempDate.getDay() !== 4) {
    tempDate.setMonth(0, 1 + ((4 - tempDate.getDay() + 7) % 7));
  }

  return (
    1 + Math.ceil((firstThursday - tempDate.getTime()) / (7 * 24 * 3600 * 1000))
  );
}
