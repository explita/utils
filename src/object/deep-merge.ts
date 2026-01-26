import { isObject } from "./is-object.js";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Performs a deep merge of two objects.
 *
 * @example
 * const target = { a: { b: 1 } };
 * const source = { a: { c: 2 } };
 * deepMerge(target, source) // { a: { b: 1, c: 2 } }
 *
 * @param target The original object.
 * @param source The updates to merge.
 * @returns A new merged object.
 */
export function deepMerge<T extends object, S extends object>(
  target: T,
  source: S,
): T & S {
  const output = { ...target } as any;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const targetValue = (target as any)[key];
      const sourceValue = (source as any)[key];

      if (isObject(targetValue) && isObject(sourceValue)) {
        output[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== undefined) {
        output[key] = sourceValue;
      }
    });
  }

  return output as T & S;
}
