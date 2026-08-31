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
  if (value == null) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (value instanceof Date || value instanceof RegExp) return false;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
