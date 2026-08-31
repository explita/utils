/**
 * Returns a pluralized string based on a count.
 *
 * @example
 * pluralize(1, "apple") // "1 apple"
 * pluralize(3, "apple") // "3 apples"
 * pluralize(2, "person", "people") // "2 people"
 * pluralize(0, "item") // "0 items"
 *
 * @param count The number of items.
 * @param singular The singular noun.
 * @param plural Optional explicit plural form.
 * @param includeCount Whether to prefix with the count (default: true).
 * @returns Pluralized string.
 */
export function pluralize(
  count: number,
  singular: string,
  plural?: string,
  includeCount: boolean = true,
): string {
  const noun =
    count === 1
      ? singular
      : plural ||
        (singular.endsWith("y") && !/[aeiou]y$/i.test(singular)
          ? `${singular.slice(0, -1)}ies`
          : singular.endsWith("s") ||
              singular.endsWith("sh") ||
              singular.endsWith("ch") ||
              singular.endsWith("x") ||
              singular.endsWith("z")
            ? `${singular}es`
            : `${singular}s`);

  return includeCount ? `${count} ${noun}` : noun;
}
