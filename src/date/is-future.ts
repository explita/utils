import { toDate } from "./to-date.js";

type IsFutureOptions = {
  includeTime?: boolean;
};

/**
 * Checks if a given date is in the future.
 *
 * @example
 * isFuture("2099-01-01") // true
 *
 * @param date The date to check.
 * @param options Configuration options.
 * @returns True if the date is in the future.
 */
export function isFuture(
  date: Date | string | number | null,
  options: IsFutureOptions = { includeTime: true },
): boolean {
  const d = toDate(date);
  if (!d) return false;

  const today = new Date();

  if (!options.includeTime) {
    return (
      new Date(d.getFullYear(), d.getMonth(), d.getDate()) >
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  }

  return d > today;
}
