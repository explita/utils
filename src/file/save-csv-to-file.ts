/**
 * Saves an array of objects to a CSV file.
 * @param data The array of objects to save.
 * @param name The name of the file to save.
 */
export function saveCSVToFile<T extends Record<string, any>[]>(
  data: T,
  name: string,
) {
  const filename = name.endsWith(".csv") ? name : `${name}.csv`;

  if (!data || data.length === 0) {
    alert("No data to export.");
    return;
  }

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(","), // header row
    ...data.map((row) =>
      headers
        .map((field) => {
          let value = row[field];
          if (typeof value === "object") {
            value = JSON.stringify(value);
          }
          // Escape double quotes and wrap in quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
