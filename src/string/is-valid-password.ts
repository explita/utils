type PasswordOptions = {
  minLength?: number;
  maxLength?: number;
};

/**
 * Checks if the given password is valid.
 *
 * The password must be at least 6 characters long and at most 25 characters long.
 * The password must contain at least one digit, one uppercase letter, one lowercase letter,
 * and one special character.
 *
 * @param password The password to check
 * @param options Options for the password check
 * @returns true if the password is valid, false otherwise
 */
export function isValidPassword(
  password: string,
  options: PasswordOptions = {},
): boolean {
  const { minLength = 6, maxLength = 25 } = options;
  return (
    /^(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) &&
    password.length >= minLength &&
    password.length <= maxLength
  );
}
