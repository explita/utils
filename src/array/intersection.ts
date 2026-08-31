/**
 * Returns an array of unique values that are included in all given arrays.
 *
 * @example
 * intersection([2, 1], [2, 3]) // [2]
 */
export function intersection<T>(...arrays: (readonly T[])[]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return Array.from(new Set(arrays[0]));

  const [first, ...rest] = arrays;
  const sets = rest.map((arr) => new Set(arr));

  return Array.from(new Set(first)).filter((item) =>
    sets.every((set) => set.has(item)),
  );
}
