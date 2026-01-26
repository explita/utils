import { formatDate } from "./format-date.js";
import { formatTime } from "./format-time.js";

type FormatDateAndTimeParams = {
  dateFormat?: string;
  timeFormat?: string;
  seperator?: string;
};

/**
 * Formats a `Date` object into a string combining both date and time according to specified formats.
 *
 * This function allows customization of the date and time formats and returns a single string
 * that includes both, separated by a specified separator.
 *
 * @param {Date} date - The `Date` object to format.
 * @param {string} [dateFormat="YYYY-MM-DD"] - The format string for the date portion.
 * @param {string} [timeFormat="hh:mmA"] - The format string for the time portion.
 * @param {string} [seperator=" "] - The separator to use between the formatted date and time.
 * @returns {string} A `string` representing the formatted date and time.
 * @throws {TypeError} If the `date` parameter is not a `Date` object.
 */
export function formatDateTime(
  date: Date | string | null = new Date(),
  {
    dateFormat = "DD/MM/YYYY",
    timeFormat = "hh:mmA",
    seperator = " | ",
  }: FormatDateAndTimeParams = {},
): string {
  const formattedDate = formatDate(date, { format: dateFormat });
  const formattedTime = formatTime(date, timeFormat);

  return `${formattedDate}${seperator}${formattedTime}`;
}
