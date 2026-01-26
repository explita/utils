/**
 * Saves an array of objects to a JSON file.
 * @param data The array of objects to save.
 * @param name The name of the file to save.
 */
export function saveJSONToFile<
  T extends Record<string, any> | Record<string, any>[],
>(data: T, name: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = name.endsWith(".json") ? name : `${name}.json`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url); // 🧹 cleanup
}
