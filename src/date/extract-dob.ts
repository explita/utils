import { isValidDate } from "./is-valid.js";

/**
 * Extracts the years, months, and days from a given date of birth.
 *
 * This function takes a Date object and returns an object with the years,
 * months, and days properties.
 *
 * @param {Date} dateOfBirth - The date of birth to extract the years, months, and days from.
 * @returns {object} An object with the years, months, and days properties.
 */
export function ageFromDOB(dateOfBirth: Date | string): {
  years: number;
  months: number;
  days: number;
} {
  if (typeof dateOfBirth === "string" && !isValidDate(dateOfBirth)) {
    throw new Error(
      `Invalid date string provided: "${dateOfBirth}". Expected format: YYYY-MM-DD or similar.`,
    );
  }

  if (typeof dateOfBirth === "string" && isValidDate(dateOfBirth)) {
    dateOfBirth = new Date(dateOfBirth);
  }

  if (!(dateOfBirth instanceof Date)) {
    throw new TypeError(
      "Expected a Date object, but received " + typeof dateOfBirth,
    );
  }

  const today = new Date();

  let years = today.getFullYear() - dateOfBirth.getFullYear();

  let months = today.getMonth() - dateOfBirth.getMonth();
  let days = today.getDate() - dateOfBirth.getDate();

  if (days < 0) {
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // get last day of previous month
    months -= 1;
  }

  if (months < 0) {
    months += 12;
  }

  const hasBirthdayPassed =
    today.getMonth() > dateOfBirth.getMonth() ||
    (today.getMonth() === dateOfBirth.getMonth() &&
      today.getDate() >= dateOfBirth.getDate());

  if (!hasBirthdayPassed) {
    years -= 1;
  }

  return { years, months, days };
}
