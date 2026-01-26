import { isValidDate } from "./is-valid.js";

/**
 * Converts various input types (Date, string, number) into a valid Date object.
 * Returns null if the input is fundamentally invalid or null.
 *
 * @param date The input to convert.
 * @returns A Date object or null if invalid.
 */
export function toDate(
  date: Date | string | number | null | undefined,
): Date | null {
  if (date === null || date === undefined) return null;

  const d = new Date(date);
  if (isValidDate(d)) return d;

  return null;
}
