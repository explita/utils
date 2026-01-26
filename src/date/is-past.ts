import { toDate } from "./to-date.js";

type IsPastOptions = {
  includeTime?: boolean;
};

/**
 * Checks if a given date is in the past.
 *
 * @example
 * isPast("2000-01-01") // true
 *
 * @param date The date to check.
 * @param options Configuration options.
 * @returns True if the date is in the past.
 */
export function isPast(
  date: Date | string | number | null,
  options: IsPastOptions = { includeTime: true },
): boolean {
  const d = toDate(date);
  if (!d) return false;

  const today = new Date();

  if (!options.includeTime) {
    return (
      new Date(d.getFullYear(), d.getMonth(), d.getDate()) <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  }

  return d < today;
}
