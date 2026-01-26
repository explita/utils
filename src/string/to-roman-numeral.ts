/**
 * Converts an integer to a Roman numeral string.
 *
 * @param {number} num The number to convert to a Roman numeral.
 * @returns {string} The Roman numeral string.
 *
 * @example
 * toRomanNumeral(4) // "IV"
 * toRomanNumeral(9) // "IX"
 * toRomanNumeral(2023) // "MMXXIII"
 */

export function toRomanNumeral(num: number) {
  const lookup: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return lookup.reduce((acc, [roman, value]) => {
    // Repeat the Roman numeral as many times as it fits into the number
    const count = Math.floor(num / value);
    num %= value; // Update num to the remainder

    return acc + roman.repeat(count);
  }, "");
}
