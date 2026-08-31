/**
 * Truncates a string to a given maximum length, respecting word boundaries if possible.
 *
 * @example
 * truncate("The quick brown fox jumps over the lazy dog", 20) // "The quick brown fox..."
 *
 * @param str The string to truncate.
 * @param maxLength The maximum allowed length including ellipsis.
 * @param ellipsis The truncation suffix (default: "...").
 * @returns The truncated string.
 */
export function truncate(
  str: string,
  maxLength: number,
  ellipsis: string = "...",
): string {
  if (!str || typeof str !== "string") return "";
  if (str.length <= maxLength) return str;

  const targetLength = Math.max(0, maxLength - ellipsis.length);
  if (targetLength === 0) return ellipsis.slice(0, maxLength);

  const truncated = str.slice(0, targetLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > targetLength * 0.7) {
    return `${truncated.slice(0, lastSpace).trim()}${ellipsis}`;
  }

  return `${truncated.trim()}${ellipsis}`;
}
