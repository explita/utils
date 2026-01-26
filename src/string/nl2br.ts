/**
 * Replaces newlines with HTML line breaks.
 *
 * @param {string} str The string to convert.
 * @param {boolean} [is_xhtml=false] Whether to output XHTML-style line breaks.
 * @returns {string} The string with newlines replaced with HTML line breaks.
 */
export function nl2br(str: string, is_xhtml?: boolean): string {
  if (typeof str === "undefined" || str === null) {
    return "";
  }

  const breakTag =
    is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";

  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + breakTag + "$2",
  );
}
