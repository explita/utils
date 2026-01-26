import { isValidDate } from "./is-valid.js";

export type FormatTimeParams =
  /**
   * The format string using tokens.
   *
   * Tokens:
   * - HH: 24-hour hour (00-23)
   * - H: 24-hour hour (0-23)
   * - hh: 12-hour hour (01-12)
   * - h: 12-hour hour (1-12)
   * - mm: 2-digit minute (00-59)
   * - m: minute (0-59)
   * - ss: 2-digit second (00-59)
   * - s: second (0-59)
   * - SSS: 3-digit millisecond (000-999)
   * - A: AM/PM
   * - a: am/pm
   * - [text]: Escaped literal text
   */
  string | "HH:mm:ss" | "HH:mm" | "hh:mmA" | "hh:mm:ssA" | "HH:mm:ss.SSS";

/**
 * Formats a given date object, string, or timestamp into a specified time format.
 *
 * @param date The date to format (Date object, ISO string, or timestamp).
 * @param format The format string using tokens. Defaults to "hh:mmA".
 * @returns A string representing the formatted time.
 *
 * @example
 * formatTime(new Date(), "HH:mm:ss") // "14:30:05"
 * formatTime(Date.now(), "h:mm a") // "2:30 pm"
 * formatTime(null, "[Current time is] HH:mm") // "Current time is 14:30"
 */
export function formatTime(
  date: Date | string | number | null = new Date(),
  format: FormatTimeParams = "hh:mmA",
): string {
  let dateObj: Date;

  if (date === null) {
    dateObj = new Date();
  } else if (date instanceof Date) {
    dateObj = date;
  } else if (typeof date === "number") {
    dateObj = new Date(date);
  } else {
    // String handling
    if (!isValidDate(date)) {
      throw new Error(
        `Invalid date string provided: "${date}". Expected standard date format.`,
      );
    }
    dateObj = new Date(date);
  }

  if (!isValidDate(dateObj)) {
    throw new Error("The provided date is invalid.");
  }

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const milliseconds = dateObj.getMilliseconds();

  const tokens: Record<string, string> = {
    HH: String(hours).padStart(2, "0"),
    H: String(hours),
    hh: String(hours % 12 || 12).padStart(2, "0"),
    h: String(hours % 12 || 12),
    mm: String(minutes).padStart(2, "0"),
    m: String(minutes),
    ss: String(seconds).padStart(2, "0"),
    s: String(seconds),
    SSS: String(milliseconds).padStart(3, "0"),
    A: hours >= 12 ? "PM" : "AM",
    a: hours >= 12 ? "pm" : "am",
  };

  const regex = /\[([^\]]+)\]|HH|H|hh|h|mm|m|ss|s|SSS|A|a/g;

  return format.replace(regex, (match, escaped) => {
    if (escaped !== undefined) {
      return escaped;
    }
    return tokens[match] || match;
  });
}
