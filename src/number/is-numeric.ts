/**
 * Checks if the given value is numeric.
 *
 * @example
 * isNumeric(123) // true
 * isNumeric("123") // true
 * isNumeric("123.45") // true
 * isNumeric("abc") // false
 * isNumeric(Infinity) // false
 *
 * @param value The value to check.
 * @returns True if the value is numeric, false otherwise.
 */
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
