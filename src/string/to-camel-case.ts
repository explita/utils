/**
 * Converts a string to camelCase.
 *
 * @example
 * toCamelCase("Hello World") // "helloWorld"
 * toCamelCase("kebab-case-string") // "kebabCaseString"
 * toCamelCase("") // ""
 *
 * @param str The string to convert to camelCase.
 * @returns The camelCase version of the input string.
 */
export function toCamelCase(str: string): string {
  if (!str) {
    return "";
  }

  // Use regex to split string into meaningful parts
  const parts =
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) || [];

  // Convert parts to Title Case, then join
  const titleCased = parts
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");

  // Ensure first letter is lowercase for camelCase
  return titleCased.slice(0, 1).toLowerCase() + titleCased.slice(1);
}
