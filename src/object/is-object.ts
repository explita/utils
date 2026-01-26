/**
 * Checks if the provided value is a plain object (and not null or an array).
 *
 * @example
 * isObject({ a: 1 }) // true
 * isObject([1, 2]) // false
 * isObject(null) // false
 *
 * @param value The value to check.
 * @returns True if the value is a non-null, non-array object.
 */
export function isObject(value: unknown): value is Record<string, any> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
