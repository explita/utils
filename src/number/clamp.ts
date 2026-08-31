/**
 * Restricts a number to be within the specified minimum and maximum bounds.
 *
 * @example
 * clamp(10, 0, 5) // 5
 * clamp(-5, 0, 5) // 0
 * clamp(3, 0, 5) // 3
 *
 * @param value The number to clamp.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns The clamped number.
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new Error(
      "Minimum bound must be less than or equal to maximum bound",
    );
  }
  return Math.min(Math.max(value, min), max);
}
