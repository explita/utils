type Flatten<T> =
  T extends Array<infer U>
    ? Flatten<U>[] // Recursively flatten array elements
    : T extends object
      ? {
          [K in keyof T as K extends string
            ? `${K}`
            : never]: T[K] extends object
            ? T[K] extends Date | RegExp | File | Blob
              ? T[K] // Prevent flattening for atomic types (Date, RegExp, etc.)
              : Flatten<T[K]> // Recurse for nested objects
            : T[K]; // If it's a primitive type, just keep it
        }
      : T;

/**
 * Recursively flattens a nested object into a flat object with dot-separated keys.
 *
 * @example
 * const input = { a: { b: 1, c: [2, 3] } };
 * flattenObject(input) // { 'a.b': 1, 'a.c.0': 2, 'a.c.1': 3 }
 *
 * @param obj The object to be flattened.
 * @param prefix Internal use for recursion.
 * @returns A flattened version of the input object.
 */
export function flattenObject(obj: any, prefix: string = ""): any {
  let result: any = {};

  if (
    obj === null ||
    typeof obj !== "object" ||
    obj instanceof Date ||
    obj instanceof RegExp ||
    obj instanceof File ||
    obj instanceof Blob
  ) {
    if (prefix) {
      result[prefix] = obj;
    }
    return result;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      Object.assign(
        result,
        flattenObject(item, prefix ? `${prefix}.${index}` : `${index}`),
      );
    });
  } else {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      Object.assign(result, flattenObject(value, newKey));
    });
  }

  return result;
}
