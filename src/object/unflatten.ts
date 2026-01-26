type DotToNested<T> =
  T extends Record<string, any>
    ? {
        [K in keyof T as K extends `${infer P}.${infer R}`
          ? P
          : K]: K extends `${infer P}.${infer R}`
          ? DotToNested<{ [key in R]: T[K] }>
          : T[K];
      }
    : never;

type Merge<T> = (T extends any ? (x: T) => void : never) extends (
  x: infer R,
) => void
  ? { [K in keyof R]: R[K] }
  : never;

type MergeUnion<T> = Merge<T>;

type Atomic = Date | RegExp | File | Blob; // Add more if needed

type DeepMerge<T> = {
  [K in keyof T]: T[K] extends Atomic
    ? T[K]
    : T[K] extends object
      ? Merge<DeepMerge<T[K]>>
      : T[K];
};

type NumericKeys<T> = Extract<keyof T, `${number}`>;

type IsNumericObject<T> = keyof T extends NumericKeys<T> ? true : false;

type ObjectToArray<T> = T extends Atomic
  ? T
  : IsNumericObject<T> extends true
    ? T extends Record<number, infer U>
      ? U[]
      : never
    : {
        [K in keyof T]: T[K] extends object ? ObjectToArray<T[K]> : T[K];
      };

type UnflattenObject<T> = ObjectToArray<DeepMerge<MergeUnion<DotToNested<T>>>>;

/**
 * Converts a flat object with dot notation keys into a nested object.
 *
 * @example
 * const input = { 'a.b': 1, 'a.c.0': 'x' };
 * unflattenObject(input) // { a: { b: 1, c: ['x'] } }
 *
 * @template T The type of the input object.
 * @param obj The object with dot notation keys to be unflattened.
 * @returns A nested object reconstructed from the dot notation keys.
 */
export function unflattenObject<T extends Record<string, any>>(
  obj: T | null | undefined,
): UnflattenObject<T> {
  if (!obj || typeof obj !== "object") {
    throw new Error("Invalid input: Expected an object");
  }

  const result: any = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const parts = key.split(".");

    let current: any = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (i === parts.length - 1) {
        if (/^\d+$/.test(part)) {
          if (!Array.isArray(current)) current = [];
          current[parseInt(part, 10)] = value;
        } else {
          current[part] = value;
        }
      } else {
        const nextPartIsNumeric = /^\d+$/.test(parts[i + 1]);

        if (!current[part]) {
          current[part] = nextPartIsNumeric ? [] : {};
        }

        if (typeof current[part] !== "object" || current[part] === null) {
          throw new Error(`Invalid structure at key part: ${part}`);
        }

        current = current[part];
      }
    }
  });

  return result;
}
