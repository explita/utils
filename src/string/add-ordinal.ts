/**
 * Appends the correct ordinal suffix to a number.
 *
 * @example
 * addOrdinal(1) // "1st"
 * addOrdinal(2) // "2nd"
 * addOrdinal(3) // "3rd"
 * addOrdinal(4) // "4th"
 * addOrdinal(11) // "11th"
 * @param {number} num
 * @returns {string}
 */
export function addOrdinal(num: number): string {
  if (![11, 12, 13].includes(num % 100)) {
    switch (num % 10) {
      // Handle 1st, 2nd, 3rd
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
    }
  }
  return `${num}th`;
}
