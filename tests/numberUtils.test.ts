import { randomNumber } from "../src/number/random";
import { isNumeric } from "../src/number/is-numeric";
import { percentage } from "../src/number/percentage";
import { clamp } from "../src/number/clamp";
import { formatCompactNumber } from "../src/number/format-compact-number";
import { range } from "../src/number/range";

describe("randomNumber", () => {
  test("should generate a random number with the specified length", () => {
    const length = 6;
    const result = randomNumber(length);
    expect(result.toString().length).toBe(length);
  });

  test("should generate a random number with a default length of 8", () => {
    const result = randomNumber();
    expect(result.toString().length).toBe(8);
  });
});

describe("isNumeric", () => {
  test("should return true for valid numbers", () => {
    expect(isNumeric(123)).toBe(true);
    expect(isNumeric(0)).toBe(true);
    expect(isNumeric(-1)).toBe(true);
    expect(isNumeric(1.23)).toBe(true);
  });

  test("should return true for numeric strings", () => {
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("1.23")).toBe(true);
    expect(isNumeric("-10")).toBe(true);
  });

  test("should return false for non-numeric values", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(NaN)).toBe(false);
    expect(isNumeric(Infinity)).toBe(false);
  });
});

describe("percentage", () => {
  test("should calculate basic percentage", () => {
    expect(percentage(200, 50)).toBe(25);
    expect(percentage(100, 10)).toBe(10);
  });

  test("should handle zero total", () => {
    expect(percentage(0, 50)).toBe(0);
  });

  test("should handle precision", () => {
    expect(percentage(3, 1, 2)).toBe(33.33);
    expect(percentage(3, 1, 0)).toBe(33);
  });

  test("should handle zero value", () => {
    expect(percentage(100, 0)).toBe(0);
  });
});

describe("clamp", () => {
  test("should clamp values within bounds", () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-5, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });
});

describe("formatCompactNumber", () => {
  test("should format compact numbers", () => {
    expect(formatCompactNumber(1200)).toBe("1.2K");
    expect(formatCompactNumber(1500000)).toBe("1.5M");
  });
});

describe("range", () => {
  test("should generate number ranges", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 6, 2)).toEqual([0, 2, 4, 6]);
    expect(range(3)).toEqual([0, 1, 2, 3]);
  });
});

