import { isValidDate } from "./is-valid.js";

/**
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * This function takes a date and calculates the time difference between the current
 * time and the given date. It returns a string representing the time elapsed in a
 * human-readable format such as "a few seconds ago", "1 minute ago", or "2 hours ago".
 * If the difference is in days, weeks, months, or years, it returns the corresponding
 * string format.
 *
 * @param {Date | null | undefined} date - The date to calculate the time elapsed from.
 * @returns {string} - A human-readable string representing the time elapsed since the given date.
 * @throws {Error} - Throws an error if the date is null, undefined, or in the future.
 */
export function timeAgo(
  date: Date | string | number | null | undefined,
): string {
  if (date === null || date === undefined) {
    throw new Error("date is null or undefined");
  }

  if (typeof date === "string" && !isValidDate(date)) {
    throw new Error(
      `Invalid date string provided: "${date}". Expected format: YYYY-MM-DD or similar.`,
    );
  }

  if (typeof date === "string" && isValidDate(date)) {
    date = new Date(date);
  }

  if (!(date instanceof Date)) {
    throw new TypeError("Expected a Date object, but received " + typeof date);
  }

  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 0) {
    throw new Error("date is in the future");
  }

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
