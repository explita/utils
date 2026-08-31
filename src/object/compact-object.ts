/**
 * Removes null and undefined (and optionally empty string) properties from an object.
 *
 * @example
 * compactObject({ a: 1, b: null, c: undefined, d: "hi", e: 0 }) // { a: 1, d: "hi", e: 0 }
 *
 * @param obj The object to compact.
 * @param options Whether to also remove empty strings (default: false).
 * @returns A new compacted object.
 */
export function compactObject<T extends Record<string, any>>(
  obj: T,
  options?: { removeEmptyStrings?: boolean },
): Partial<T> {
  if (!obj || typeof obj !== "object") return {};

  const { removeEmptyStrings = false } = options || {};

  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => {
      if (value === undefined || value === null) return false;
      if (
        removeEmptyStrings &&
        typeof value === "string" &&
        value.trim() === ""
      ) {
        return false;
      }
      return true;
    }),
  ) as Partial<T>;
}
