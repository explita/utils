import { startOfDay } from "./start-of-day.js";
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

  const target = startOfDay(d);
  const today = startOfDay(new Date());

  if (target <= today) return 0;

  const diff = target.getTime() - today.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}
