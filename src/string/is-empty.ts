/**
 * Checks if a given value is empty.
 *
 * A value is considered empty if it is null, undefined,
 * or if it's an object or string with no properties or characters.
 *
 * @param value The value to check.
 * @returns True if the value is empty, false otherwise.
 */
export function isEmpty(value: unknown): boolean {
  return (
    value == null ||
    value == undefined ||
    (typeof value === "string" && !value.trim().length) ||
    (typeof value === "object" && !Object.keys(value).length) ||
    (Array.isArray(value) && !value.length)
  );
}
