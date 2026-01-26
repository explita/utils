import { toKebabCase } from "./to-kebab-case.js";

/**
 * Converts a string to a URL slug
 *
 * @example
 * slugify("Hello World") // "hello-world"
 * slugify("CamelCaseString") // "camel-case-string"
 * slugify("") // ""
 */
export function slugify(text: string): string {
  return toKebabCase(text);
}
