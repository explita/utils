/**
 * Builds a query string from a given object, string, or URLSearchParams.
 *
 * @example
 * buildQueryString({ foo: 'bar' }) // "foo=bar"
 * buildQueryString("foo=bar") // "foo=bar"
 * buildQueryString([["foo", "bar"]]) // "foo=bar"
 * buildQueryString(new URLSearchParams("foo=bar")) // "foo=bar"
 * buildQueryString(undefined) // ""
 * @param {string | Record<string, string> | string[][] | URLSearchParams | undefined} params
 * @returns {string}
 */
export const buildQueryString = (
  params:
    | string
    | Record<string, string>
    | string[][]
    | URLSearchParams
    | undefined,
): string => {
  return new URLSearchParams(params).toString();
};
