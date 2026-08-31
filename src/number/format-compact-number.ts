/**
 * Formats large numbers into compact human-readable strings (e.g. 1.2K, 3.4M, 5.1B).
 *
 * @example
 * formatCompactNumber(1200) // "1.2K"
 * formatCompactNumber(1500000) // "1.5M"
 *
 * @param num The number to format.
 * @param locale The locale to format with (default "en-US").
 * @returns Compact formatted number string.
 */
export function formatCompactNumber(
  num: number,
  locale: string = "en-US",
): string {
  if (typeof num !== "number" || isNaN(num)) return "0";

  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);
}
