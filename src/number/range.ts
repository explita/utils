/**
 * Creates an array of numbers progressing from start up to end.
 *
 * @example
 * range(1, 5) // [1, 2, 3, 4, 5]
 * range(0, 10, 2) // [0, 2, 4, 6, 8, 10]
 * range(5) // [0, 1, 2, 3, 4, 5]
 */
export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error("Step cannot be zero");
  }

  const result: number[] = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}
