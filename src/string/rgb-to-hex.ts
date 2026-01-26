/**
 * Converts RGB values to a hexadecimal color string.
 *
 * @param {number} r - The red component of the color (0-255).
 * @param {number} g - The green component of the color (0-255).
 * @param {number} b - The blue component of the color (0-255).
 * @returns {string} A string in the format `#RRGGBB` representing the color.
 */
export function rgbToHex(r: number, g: number, b: number): string {
  // Ensure the values are within the valid RGB range (0-255)
  const validate = (value: number) => Math.max(0, Math.min(255, value));

  r = validate(r);
  g = validate(g);
  b = validate(b);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
