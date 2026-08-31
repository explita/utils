/**
 * Sorts an array of items by a specified key or iterating function without mutating the input array.
 *
 * @example
 * sortBy([{ age: 30 }, { age: 20 }], 'age') // [{ age: 20 }, { age: 30 }]
 * sortBy([3, 1, 2], (x) => x, 'desc') // [3, 2, 1]
 */
export function sortBy<T>(
  array: readonly T[],
  iteratees: keyof T | ((item: T) => any),
  order: "asc" | "desc" = "asc",
): T[] {
  if (!Array.isArray(array)) return [];

  const copy = [...array];
  const getValue =
    typeof iteratees === "function"
      ? iteratees
      : (item: T) => (item ? (item as any)[iteratees] : undefined);

  return copy.sort((a, b) => {
    const valA = getValue(a);
    const valB = getValue(b);

    if (valA === valB) return 0;
    if (valA === undefined || valA === null) return 1;
    if (valB === undefined || valB === null) return -1;

    const result = valA < valB ? -1 : 1;
    return order === "desc" ? -result : result;
  });
}
