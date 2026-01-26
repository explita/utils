/**
 * Creates a new object by prepending a specified string to each key of the original object.
 *
 * @example
 * const original = { name: 'Alice', age: 30 };
 * prependKeys(original, 'user_') // { user_name: 'Alice', user_age: 30 }
 *
 * @param obj The original object.
 * @param prefix The string to prepend to each key.
 * @returns A new object with modified keys.
 */
export function prependKeys<T extends Record<string, any>, P extends string>(
  obj: T | null | undefined,
  prefix: P,
): { [K in keyof T as `${P}${string & K}`]: T[K] } {
  if (!obj) return {} as any;

  const result: any = {};
  Object.keys(obj).forEach((key) => {
    result[`${prefix}${key}`] = obj[key];
  });

  return result;
}
