/**
 * Generates a unique string of a specified length with optional special characters.
 *
 * @param {number} length - The length of the unique string to generate.
 * @param {boolean} isPassword - If true, includes special characters for passwords.
 * @returns {string} - The generated unique string.
 *
 * @example
 * uniqueString(16, true); // "nC4t@h5Ld^3o9Kv1"
 */
export function uniqueString(length: number, isPassword = false): string {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  if (isPassword) {
    chars += "!@#$%^&*()_+-=[]{}|;':\",./<>?";
  }

  let uniqueString = "";

  for (let i = 0; i < length; i++) {
    uniqueString += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return uniqueString;
}
