/**
 * Checks if a given string is a valid email address.
 * @param email The string to check.
 * @returns True if the string is a valid email address, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
