import { toDate } from "./to-date.js";

/**
 * Returns a human-readable string representing the time remaining until the given future date.
 *
 * @example
 * timeUntil(Date.now() + 60000) // "in 1 minute"
 *
 * @param date The future date to calculate time until.
 * @returns A human-readable relative time string.
 */
export function timeUntil(date: Date | string | number): string {
  const d = toDate(date);
  if (!d) {
    throw new Error(
      `Invalid date provided: "${date}". Expected format: YYYY-MM-DD or similar.`,
    );
  }

  const diff = d.getTime() - Date.now();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) return "in a few seconds";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60)
    return `in ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `in ${hours} ${hours === 1 ? "hour" : "hours"}`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `in ${days} ${days === 1 ? "day" : "days"}`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `in ${weeks} ${weeks === 1 ? "week" : "weeks"}`;

  const months = Math.floor(days / 30);
  if (months < 12) return `in ${months} ${months === 1 ? "month" : "months"}`;

  const years = Math.floor(days / 365);
  return `in ${years} ${years === 1 ? "year" : "years"}`;
}
