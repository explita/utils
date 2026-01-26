/**
 * Converts a string to Title Case.
 *
 * @example
 * toTitleCase("Hello World") // "Hello World"
 * toTitleCase("kebab-case-string") // "Kebab Case String"
 * toTitleCase("") // ""
 *
 * @param str The string to convert to Title Case.
 * @returns The Title Case version of the input string.
 */
export function toTitleCase(str: string): string {
  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) || []
  )
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1))
    .join(" ");
}
