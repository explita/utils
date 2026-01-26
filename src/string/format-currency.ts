/**
 * Formats a given number as a currency string.
 *
 * The function takes an amount and an optional currency symbol.
 * It returns the amount formatted with two decimal places and
 * a thousands separator, prefixed with the specified currency symbol.
 *
 * @example
 * formatCurrency(1234.56, "$") // "$1,234.56"
 *
 * @param {number} amount - The amount to format.
 * @param {string} [currency=""] - The currency symbol to prefix.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount: number, currency: string = ""): string {
  if (!amount) return `${currency}0`;

  return `${currency}${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
