/**
 * Parses the query string from a URL and returns it as an object.
 *
 * @param url - The URL containing the query string to parse.
 * @returns An object where each key-value pair represents a parameter from the query string.
 */
export const parseQueryString = (url: string): Record<string, string> => {
  const queryString = url.split("?")[1];
  return Object.fromEntries(new URLSearchParams(queryString));
};
