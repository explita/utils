/**
 * Splits an array into two arrays: the first containing elements for which the predicate returns truthy,
 * and the second containing elements for which it returns falsy.
 *
 * @example
 * partition([1, 2, 3, 4], (n) => n % 2 === 0) // [[2, 4], [1, 3]]
 */
export function partition<T>(
  array: readonly T[],
  predicate: (item: T, index: number, array: readonly T[]) => boolean,
): [T[], T[]] {
  if (!Array.isArray(array)) return [[], []];

  const pass: T[] = [];
  const fail: T[] = [];

  array.forEach((item, index) => {
    if (predicate(item, index, array)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  });

  return [pass, fail];
}
