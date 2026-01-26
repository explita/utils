/**
 * Converts a string to kebab-case
 *
 * @example
 * toKebabCase("Hello World") // "hello-world"
 * toKebabCase("CamelCaseString") // "camel-case-string"
 * toKebabCase("") // ""
 */
export function toKebabCase(str: string): string {
  if (!str) {
    return "";
  }

  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) || []
  )
    .map((x: string) => x.toLowerCase())
    .join("-");
}
