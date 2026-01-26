/**
 * Returns a greeting based on the current time of day.
 * @param name The name to include in the greeting.
 * @param opts Optional greeting options.
 * @returns A greeting string.
 */
export function greeting(
  name?: string,
  opts?: { morning?: string; afternoon?: string; evening?: string },
) {
  const date = new Date();
  const hour = date.getHours();

  const {
    morning = "Good morning",
    afternoon = "Good afternoon",
    evening = "Good evening",
  } = opts || {};

  if (hour < 12) {
    return `${morning} ${name}`;
  } else if (hour < 17) {
    return `${afternoon} ${name}`;
  } else {
    return `${evening} ${name}`;
  }
}
