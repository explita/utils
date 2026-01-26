/**
 * Find duplicates in an array of objects based on a specific key.
 * @param data The array of objects to search for duplicates.
 * @param key The key to use for finding duplicates.
 * @param message The message to include in the duplicate object.
 * @returns An array of objects containing the index and key of the duplicate.
 */
export function findDuplicates<
  T extends Record<string, any>,
  K extends keyof T,
>(data: T[], key: K, message?: string) {
  message = message || "Duplicate item selected";

  const seen = new Map<string, number>();
  const duplicates: { _index: number; [key]: string }[] = [];

  data.forEach((item, index) => {
    if (!item[key]) return;

    const firstIndex = seen.get(item[key]);

    if (firstIndex !== undefined) {
      // mark the current one
      duplicates.push({
        _index: index,
        [key]: message,
      });

      // mark the first only once
      if (!duplicates.some((e) => e._index === firstIndex)) {
        duplicates.push({
          _index: firstIndex,
          [key]: message,
        });
      }
    } else {
      seen.set(item[key], index);
    }
  });

  return duplicates;
}
