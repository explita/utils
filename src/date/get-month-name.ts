import { formatDate, FormatDateParams } from "./format-date.js";

/**
 * Retrieves the month from a given date as a formatted string.
 *
 * @example
 * const result = getMonthName();
 * console.log(result);
 * // Output: "Jan" (or the current month)
 *
 * const result = getMonthName(new Date(), "long");
 * console.log(result);
 * // Output: "August" (or the current month)
 *
 * @param {Date | string | null} [date] - The date to retrieve the month from.
 * @param {FormatDateParams["monthFormat"]} [format] - The format of the month string.
 * @returns {string} The month as a formatted string.
 */
export function getMonthName(
  date: Date | string | null = new Date(),
  format: FormatDateParams["monthFormat"] = "short",
): string {
  const month = formatDate(date, { format: "M", monthFormat: format });
  return month;
}
