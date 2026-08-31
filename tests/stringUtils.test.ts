import { addOrdinal } from "../src/string/add-ordinal";
import { buildQueryString } from "../src/string/build-query-string";
import { toTitleCase as camelToTitle } from "../src/string/to-title-case";
import { capitalize } from "../src/string/capitalize";
import { chunkSplit } from "../src/string/chunk-split";
import { formatCurrency } from "../src/string/format-currency";
import { parseQueryString } from "../src/string/parse-query-string";
import { slugify } from "../src/string/slugify";
import { toSentenceCase } from "../src/string/to-sentence-case";
import { uniqueString } from "../src/string/unique-string";
import { truncate } from "../src/string/truncate";
import { mask } from "../src/string/mask";
import { pluralize } from "../src/string/pluralize";

test("capitalize should capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("slugify should convert text to a URL-friendly slug", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("camelToTitle should convert camelCase to Title Case", () => {
  expect(camelToTitle("helloWorld")).toBe("Hello World");
});

test("parseQueryString should parse the query string from a URL", () => {
  expect(parseQueryString("https://example.com?name=John&age=30")).toEqual({
    name: "John",
    age: "30",
  });
});

test("buildQueryString should build a query string from an object or string", () => {
  expect(buildQueryString("foo=bar")).toEqual("foo=bar");
});

test("addOrdinal should add an ordinal to a number", () => {
  expect(addOrdinal(1)).toBe("1st");
});

test("chunkSplit should split a string into chunks", () => {
  expect(chunkSplit(123456789, 3, ",")).toBe("123,456,789");
});

test("uniqueString should generate a unique string", () => {
  expect(uniqueString(16, false)).toHaveLength(16);
});

test("toSentenceCase should handle uppercase snake_case", () => {
  expect(toSentenceCase("FULL_TIME")).toBe("Full time");
});

test("formatCurrency should format amount with symbol", () => {
  expect(formatCurrency(1234.56, "$")).toBe("$1,234.56");
});

test("truncate should truncate string at word boundary", () => {
  expect(truncate("The quick brown fox jumps", 15)).toBe("The quick...");
  expect(truncate("Short", 10)).toBe("Short");
});

test("mask should mask sensitive characters", () => {
  expect(mask("1234567890", { start: 2, end: 2, char: "*" })).toBe("12******90");
});

test("pluralize should handle singular and plural nouns", () => {
  expect(pluralize(1, "apple")).toBe("1 apple");
  expect(pluralize(3, "apple")).toBe("3 apples");
  expect(pluralize(2, "person", "people")).toBe("2 people");
});

