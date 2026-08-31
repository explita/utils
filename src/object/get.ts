/**
 * Safely gets the value at path of object. If the resolved value is undefined, the defaultValue is returned.
 *
 * @example
 * const object = { a: [{ b: { c: 3 } }] };
 * get(object, 'a.0.b.c') // 3
 * get(object, 'a.b.c', 'default') // 'default'
 */
export function get<T = any>(
  object: any,
  path: string | (string | number)[],
  defaultValue?: T,
): T {
  if (object === null || object === undefined) {
    return defaultValue as T;
  }

  const keys = Array.isArray(path)
    ? path
    : path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/^\./, "")
        .split(".");

  let current: any = object;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return defaultValue as T;
    }
    current = current[key];
  }

  return (current === undefined ? defaultValue : current) as T;
}
