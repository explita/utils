/**
 * Checks if a given string is a valid phone number.
 *
 * @param phone The string to check.
 * @returns True if the string is a valid phone number, false otherwise.
 */
export function isValidPhone(phone: string): boolean {
  // Simple regex for phone validation: allows +, spaces, dashes, and numbers
  return /^\+?[0-9\s\-()]+$/.test(phone) && phone.trim().length >= 7;
}
