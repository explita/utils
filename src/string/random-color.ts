/**
 * Generates a random color string in the specified format.
 *
 * @param {string} type - The format of the color string to generate.
 *                          One of "hex", "hex8", "rgb", "rgba", "hsl", or "hsla". Defaults to "hex".
 * @returns {string} A random color string in the specified format.
 * @throws {Error} If the `type` parameter is not one of the supported types.
 *
 * @example
 * randomColor("hex") // "#FF0000"
 * randomColor("hex8") // "#FF000080"
 * randomColor("rgb") // "rgb(255, 0, 0)"
 * randomColor("rgba") // "rgba(255, 0, 0, 0.5)"
 * randomColor("hsl") // "hsl(0, 100%, 50%)"
 * randomColor("hsla") // "hsla(0, 100%, 50%, 0.5)"
 */
export function randomColor(
  type: "hex" | "hex8" | "rgb" | "rgba" | "hsl" | "hsla" = "hex",
): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  if (type === "hex" || type === "hex8") {
    const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
    if (type === "hex8") {
      const a = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
      return `#${hex}${a}`.toUpperCase();
    }
    return `#${hex}`.toUpperCase();
  }

  if (type === "rgb") {
    return `rgb(${r}, ${g}, ${b})`;
  }

  if (type === "rgba") {
    const a = Math.random().toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  if (type === "hsl" || type === "hsla") {
    const h = Math.floor(Math.random() * 361);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);

    if (type === "hsl") {
      return `hsl(${h}, ${s}%, ${l}%)`;
    }

    const a = Math.random().toFixed(2);
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }

  throw new Error(
    "Invalid color type. Use 'hex', 'hex8', 'rgb', 'rgba', 'hsl', or 'hsla'.",
  );
}
