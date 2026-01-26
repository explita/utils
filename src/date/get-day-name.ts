import { formatDate, FormatDateParams } from "./format-date.js";

/**
 * Retrieves the day of the week from a given date as a string.
 *
 * @param {Date | string | null} date - The date to retrieve the day from. Defaults to the current date.
 * @param {"short" | "long"} [format="short"] - The format of the day name to return. Defaults to "short".
 * @returns {string} The day name as a string (e.g. "Mon" or "Monday").
 */
export function getDayName(
  date: Date | string | null = new Date(),
  format: FormatDateParams["dayFormat"] = "short",
): string {
  const day = formatDate(date, { format: "D", dayFormat: format });
  return day;
}
