import { isValidDate } from "../date/is-valid.js";

/**
 * Converts data to a JSON-compatible format by replacing BigInts with numbers/strings
 * and reviving date strings back to Date objects.
 *
 * @example
 * const data = { id: BigInt(1), date: "2024-01-25T14:30:00Z" };
 * jsonify(data) // { id: 1, date: [Date Object] }
 *
 * @param data The data to process.
 * @returns The processed data.
 */
export function jsonify<T>(data: T): T {
  if (data === null || typeof data !== "object") return data;

  const replacer = (_: string, value: any) => {
    if (typeof value === "bigint") {
      return value <= Number.MAX_SAFE_INTEGER
        ? Number(value)
        : value.toString();
    }
    return value;
  };

  const reviver = (_: string, value: any) => {
    if (typeof value === "string" && isValidDate(value)) return new Date(value);

    return value;
  };

  try {
    const serialized = JSON.stringify(data, replacer);
    return JSON.parse(serialized, reviver) as T;
  } catch (error) {
    console.error("jsonify error:", error);
    return data;
  }
}
