/**
 * Calculates a percentage from a value relative to a total.
 *
 * @example
 * percentage(200, 50) // 25
 * percentage(200, 50, 2) // 25.00
 *
 * @param total The total value.
 * @param value The value to calculate the percentage for.
 * @param precision Optional decimal precision.
 * @returns The calculated percentage.
 */
export function percentage(
  total: number,
  value: number,
  precision?: number,
): number {
  if (total === 0) return 0;
  const result = (value / total) * 100;
  return typeof precision === "number"
    ? Number(result.toFixed(precision))
    : result;
}
