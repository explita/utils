import { formatDate } from "./format-date.js";
import { formatTime } from "./format-time.js";
import { isToday } from "./is-today.js";
import { isTomorrow } from "./is-tomorrow.js";
import { isYesterday } from "./is-yesterday.js";
import { toDate } from "./to-date.js";

/**
 * Formats a date relative to today (e.g. "Today at 2:30PM", "Yesterday at 10:00AM", "Tomorrow at 4:00PM").
 *
 * @param date The date to format.
 * @returns Relative formatted string.
 */
export function formatRelative(date: Date | string | number): string {
  const d = toDate(date);
  if (!d) return "";

  const timeStr = formatTime(d, "hh:mmA");

  if (isToday(d)) return `Today at ${timeStr}`;
  if (isYesterday(d)) return `Yesterday at ${timeStr}`;
  if (isTomorrow(d)) return `Tomorrow at ${timeStr}`;

  return `${formatDate(d, "DD/MM/YYYY")} at ${timeStr}`;
}
