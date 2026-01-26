/**
 * Converts a hexadecimal color string to a RGB(A) string.
 *
 * @param {string} hex - The hexadecimal color string to convert.
 * @returns {string} A string in the format `rgb(r, g, b)` or `rgba(r, g, b, a)`
 *                    representing the color.
 *
 * @example
 * hexToRgb("#FF0000") // "rgb(255, 0, 0)"
 * hexToRgb("#FF000080") // "rgba(255, 0, 0, 0.5)"
 */
export function hexToRgb(hex: string): string {
  // Normalize the hex string (remove "#" if present and convert to uppercase)
  const normalizedHex = hex.startsWith("#") ? hex.slice(1) : hex;
  const isShortHex = normalizedHex.length === 3 || normalizedHex.length === 4;

  // Expand shorthand hex (e.g., "abc" to "aabbcc" or "abcd" to "aabbccdd")
  const fullHex = isShortHex
    ? normalizedHex
        .split("")
        .map((char) => char + char)
        .join("")
    : normalizedHex;

  // Determine if the color has an alpha channel
  const isRgba = fullHex.length === 8;

  // Parse color components
  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);
  const a = isRgba ? parseInt(fullHex.slice(6, 8), 16) / 255 : null;

  // Construct the RGB(A) string
  return isRgba
    ? `rgba(${r}, ${g}, ${b}, ${a?.toFixed(2)})`
    : `rgb(${r}, ${g}, ${b})`;
}
