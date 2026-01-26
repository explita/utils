import { toSentenceCase } from "./to-sentence-case.js";

/**
 * Capitalizes the first letter of a string
 *
 * @example
 * capitalize("hello") // "Hello"
 */
export function capitalize(str: string): string {
  return toSentenceCase(str);
}
