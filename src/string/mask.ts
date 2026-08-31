/**
 * Masks a string by replacing characters with a masking character, leaving leading and trailing characters visible.
 *
 * @example
 * mask("1234567890123456", { start: 4, end: 4, char: "*" }) // "1234********3456"
 * mask("password123") // "p*********3"
 *
 * @param str The string to mask.
 * @param options Configuration for start/end unmasked count and mask char.
 * @returns Masked string.
 */
export function mask(
  str: string,
  options?: {
    start?: number;
    end?: number;
    char?: string;
  },
): string {
  if (!str || typeof str !== "string") return "";

  const { start = 1, end = 1, char = "*" } = options || {};
  const len = str.length;

  if (start + end >= len) return str;

  const prefix = str.slice(0, start);
  const suffix = str.slice(len - end);
  const maskLen = len - start - end;

  return `${prefix}${char.repeat(maskLen)}${suffix}`;
}
