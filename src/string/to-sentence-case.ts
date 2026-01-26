/**
 * Converts a string to Sentence Case.
 *
 * @example
 * toSentenceCase("hello world") // "Hello world"
 * toSentenceCase("CamelCaseString") // "Camel case string"
 * toSentenceCase("") // ""
 *
 * @param str The string to convert to Sentence Case.
 * @returns The Sentence Case version of the input string.
 */
export function toSentenceCase(str: string): string {
  const s = (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) || []
  )
    .map((x: string) => x.toLowerCase())
    .join(" ");

  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
