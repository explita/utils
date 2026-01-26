/**
 * Converts a string to Snake Case.
 *
 * @example
 * toSnakeCase("Hello World") // "hello_world"
 * toSnakeCase("CamelCaseString") // "camel_case_string"
 * toSnakeCase("") // ""
 *
 * @param str The string to convert to Snake Case.
 * @returns The Snake Case version of the input string.
 */
export function toSnakeCase(str: string): string {
  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) || []
  )
    .map((x) => x.toLowerCase())
    .join("_");
}
