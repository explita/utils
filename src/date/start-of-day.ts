/**
 * Returns a new Date object set to the start of the day (00:00:00) of the given date.
 * This is useful for comparing dates without considering the time component.
 *
 * @param d The date to get the start of the day for.
 * @returns A new Date object representing the start of the day.
 */
export function startOfDay(d: Date): Date {
  // Get local date components
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  // Create UTC date with local date components
  return new Date(Date.UTC(year, month, date, 0, 0, 0, 0));
}
