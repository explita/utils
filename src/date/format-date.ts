import { isValidDate } from "./is-valid.js";

export type FormatDateParams = {
  /**
   * The format string using tokens.
   *
   * Tokens:
   * - YYYY: 4-digit year (e.g., 2024)
   * - YY: 2-digit year (e.g., 24)
   * - MMMM: Full month name (e.g., January)
   * - MMM: Short month name (e.g., Jan)
   * - MM: 2-digit month (01-12)
   * - M: Month number (1-12)
   * - DD: 2-digit day of month (01-31)
   * - D: Day of month (1-31)
   * - dddd: Full day of week (e.g., Monday)
   * - ddd: Short day of week (e.g., Mon)
   * - HH: 24-hour hour (00-23)
   * - H: 24-hour hour (0-23)
   * - hh: 12-hour hour (01-12)
   * - h: 12-hour hour (1-12)
   * - mm: 2-digit minute (00-59)
   * - m: minute (0-59)
   * - ss: 2-digit second (00-59)
   * - s: second (0-59)
   * - A: AM/PM
   * - a: am/pm
   * - [text]: Escaped literal text
   */
  format?: string;
  /** @deprecated Use MMMM or MMM tokens instead */
  monthFormat?: "short" | "long";
  /** @deprecated Use dddd or ddd tokens instead */
  dayFormat?: "short" | "long";
};

/**
 * Formats a given date object, string, or timestamp into a specified format.
 *
 * @param date The date to format (Date object, ISO string, or timestamp).
 * @param options Options object or format string. Defaults to "DD/MM/YYYY".
 * @returns A string representing the formatted date.
 *
 * @example
 * formatDate(new Date(), "YYYY-MM-DD HH:mm:ss") // "2024-01-25 14:30:05"
 * formatDate("2024-01-25", "MMMM DD, YYYY") // "January 25, 2024"
 * formatDate(Date.now(), "[Today is] dddd") // "Today is Thursday"
 */
export function formatDate(
  date: Date | string | number | null = new Date(),
  options: string | FormatDateParams = "DD/MM/YYYY",
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
        `Invalid date string provided: "${date}". Expected standard date format (e.g. YYYY-MM-DD).`,
      );
    }
    dateObj = new Date(date);
  }

  if (!isValidDate(dateObj)) {
    throw new Error("The provided date is invalid.");
  }

  const params: FormatDateParams =
    typeof options === "string" ? { format: options } : options;

  const format = params.format || "DD/MM/YYYY";
  const monthFormat = params.monthFormat || "short";

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const weekDay = dateObj.getDay();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  const monthNames = {
    long: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const dayNames = {
    long: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };

  const tokens: Record<string, string> = {
    YYYY: String(year),
    YY: String(year).slice(-2),
    MMMM: monthNames.long[month],
    MMM: monthNames.short[month],
    MM: String(month + 1).padStart(2, "0"),
    M: String(month + 1),
    DD: String(day).padStart(2, "0"),
    D: String(day),
    dddd: dayNames.long[weekDay],
    ddd: dayNames.short[weekDay],
    HH: String(hours).padStart(2, "0"),
    H: String(hours),
    hh: String(hours % 12 || 12).padStart(2, "0"),
    h: String(hours % 12 || 12),
    mm: String(minutes).padStart(2, "0"),
    m: String(minutes),
    ss: String(seconds).padStart(2, "0"),
    s: String(seconds),
    A: hours >= 12 ? "PM" : "AM",
    a: hours >= 12 ? "pm" : "am",
    // Compatibility with old "Month" pseudo-token
    Month: monthNames[monthFormat][month],
  };

  const regex =
    /\[([^\]]+)\]|Month|MMMM|MMM|dddd|ddd|YYYY|YY|MM|DD|HH|hh|mm|ss|SSS|M|D|H|h|m|s|A|a/g;

  return format.replace(regex, (match, escaped) => {
    if (escaped !== undefined) {
      return escaped;
    }
    return tokens[match] || match;
  });
}
