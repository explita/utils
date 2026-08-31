/**
 * Creates an array of values from the first array not included in the other given arrays.
 *
 * @example
 * difference([2, 1], [2, 3]) // [1]
 */
export function difference<T>(
  first: readonly T[],
  ...others: (readonly T[])[]
): T[] {
  if (!Array.isArray(first)) return [];
  if (others.length === 0) return Array.from(new Set(first));

  const otherSets = others.map((arr) => new Set(arr));

  return Array.from(new Set(first)).filter(
    (item) => !otherSets.some((set) => set.has(item)),
  );
}
