import { toDate } from "./to-date.js";

/**
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * This function takes a date and calculates the time difference between the current
 * time and the given date. It returns a string representing the time elapsed in a
 * human-readable format such as "a few seconds ago", "1 minute ago", or "2 hours ago".
 * If the difference is in days, weeks, months, or years, it returns the corresponding
 * string format.
 *
 * @param {Date | string | number} date - The date to calculate the time elapsed from.
 * @returns {string} - A human-readable string representing the time elapsed since the given date.
 * @throws {Error} - Throws an error if the date is null, undefined, invalid, or in the future.
 */
export function timeAgo(date: Date | string | number): string {
  const d = toDate(date);

  if (!d) {
    throw new Error(
      `Invalid date provided: "${date}". Expected format: YYYY-MM-DD or similar.`,
    );
  }

  const diff = Date.now() - d.getTime();

  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) return `a few seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60)
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;

  const months = Math.floor(days / 30); // approximate month
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"} ago`;

  const years = Math.floor(days / 365); // approximate year
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}
