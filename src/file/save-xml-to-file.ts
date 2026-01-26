/**
 * Saves an array of objects to an XML file.
 * @param data The array of objects to save.
 * @param name The name of the file to save.
 */
export function saveXMLToFile<T extends Record<string, any>[]>(
  data: T,
  name: string,
) {
  if (!data || data.length === 0) {
    alert("No data to export.");
    return;
  }

  const escape = (str: any) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const rows = data
    .map((row) => {
      const fields = Object.entries(row)
        .map(([key, val]) => `<${key}>${escape(val)}</${key}>`)
        .join("");
      return `<row>${fields}</row>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<${name}>\n${rows}\n</${name}>`;

  const blob = new Blob([xml], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name.endsWith(".xml") ? name : `${name}.xml`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
