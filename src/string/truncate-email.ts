/**
 * Truncates an email address by hiding the middle part.
 * @param email The email address to truncate.
 * @returns The truncated email address.
 */
export function truncateEmail(email: string) {
  if (!email) return "";

  const emailParts = email.split("@");
  if (emailParts.length < 2 || emailParts.length > 2) return email;

  const truncateLength = emailParts[0].length / 2;

  const hiddenValues = "*".repeat(truncateLength);

  return `${emailParts[0].slice(
    0,
    Math.round(truncateLength),
  )}${hiddenValues}@${emailParts[1]}`;
}
