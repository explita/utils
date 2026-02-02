import { deepMerge } from "../src/object/deep-merge";
import { omitFromObject } from "../src/object/omit-from";
import { pickFromObject } from "../src/object/pick-from";
import { prependKeys } from "../src/object/prepend-to";
import { unflattenObject } from "../src/object/unflatten";
import { flattenObject } from "../src/object/flatten";
import { isObject } from "../src/object/is-object";
import { jsonify } from "../src/object/jsonify";

describe("unflattenObject", () => {
  test("should transform a nested object into a flat object", () => {
    const expected = {
      key1: "value1",
      key2: "value2",
      key3: {
        key4: "value4",
        key5: "value5",
      },
      key6: {
        key7: "value7",
        key8: "value8",
      },
    };

    const input = {
      key1: "value1",
      key2: "value2",
      "key3.key4": "value4",
      "key3.key5": "value5",
      "key6.key7": "value7",
      "key6.key8": "value8",
    };

    expect(unflattenObject(input)).toEqual(expected);
  });

  test("should handle numeric keys as arrays", () => {
    const input = {
      "data.0": "first",
      "data.1": "second",
    };
    expect(unflattenObject(input)).toEqual({
      data: ["first", "second"],
    });
  });
});

describe("flattenObject", () => {
  test("should flatten nested objects", () => {
    const input = { a: { b: { c: 1 } } };
    expect(flattenObject(input)).toEqual({ "a.b.c": 1 });
  });

  test("should flatten arrays with indices", () => {
    const input = { a: [1, 2] };
    expect(flattenObject(input)).toEqual({ "a.0": 1, "a.1": 2 });
  });
});

describe("prependKeys", () => {
  test("should prepend a prefix to each key", () => {
    const obj = { a: 1, b: 2 };
    expect(prependKeys(obj, "p_")).toEqual({ p_a: 1, p_b: 2 });
  });
});

describe("pickFromObject", () => {
  test("should pick specified keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pickFromObject(obj, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});

describe("omitFromObject", () => {
  test("should omit specified keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omitFromObject(obj, ["b"])).toEqual({ a: 1, c: 3 });
  });
});

describe("deepMerge", () => {
  test("should recursively merge objects", () => {
    const target = { a: { b: 1 }, d: 4 };
    const source = { a: { c: 2 }, b: 3 };
    expect(deepMerge(target, source)).toEqual({
      a: { b: 1, c: 2 },
      b: 3,
      d: 4,
    });
  });
});

describe("isObject", () => {
  test("should return true for plain objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test("should return false for null, arrays, and primitives", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject("str")).toBe(false);
  });
});

describe("jsonify", () => {
  test("should handle BigInts", () => {
    const input = { id: BigInt(123) };
    expect(jsonify(input)).toEqual({ id: 123 });
  });

  test("should revive date strings", () => {
    const dateStr = "2024-01-25T14:30:00.000Z";
    const result = jsonify({ date: dateStr }) as any;
    expect(result.date).toBeInstanceOf(Date);
    expect(result.date.toISOString()).toBe(dateStr);
  });
});
