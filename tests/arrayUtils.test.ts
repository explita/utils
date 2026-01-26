import { chunk } from "../src/array/chunk";
import { flatten } from "../src/array/flatten";
import { groupBy } from "../src/array/group-by-key";
import { shuffleArray } from "../src/array/shuffle";
import { uniqueArrayByKey } from "../src/array/unique-by-key";
import { uniqueArray } from "../src/array/unique";

describe("uniqueArray", () => {
  test("should remove duplicate elements", () => {
    expect(uniqueArray([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("should handle strings", () => {
    expect(uniqueArray(["a", "b", "a"])).toEqual(["a", "b"]);
  });
});

describe("uniqueArrayByKey", () => {
  test("should remove duplicate objects based on a key", () => {
    const array = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 1, name: "John" },
    ];

    expect(uniqueArrayByKey(array, "id")).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
  });

  test("should return an empty array for null/undefined input", () => {
    expect(uniqueArrayByKey(null, "id")).toEqual([]);
    expect(uniqueArrayByKey(undefined, "id")).toEqual([]);
  });
});

describe("chunk", () => {
  test("should split array into chunks of a given size", () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("should handle trailing elements correctly", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("should throw on invalid size", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow();
  });
});

describe("flatten", () => {
  test("should flatten deeply nested arrays", () => {
    expect(
      flatten([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });
});

describe("shuffleArray", () => {
  test("should return a new array with same length and elements", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(array);
    expect(shuffled).toHaveLength(array.length);
    expect(shuffled).toEqual(expect.arrayContaining(array));
  });

  test("should not modify the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const original = [...array];
    shuffleArray(array);
    expect(array).toEqual(original);
  });
});

describe("groupBy", () => {
  test("should group objects by a key", () => {
    const input = [
      { id: 1, category: "a" },
      { id: 2, category: "a" },
      { id: 3, category: "b" },
    ];

    const result = groupBy(input, "category");
    expect(result).toEqual({
      a: [
        { id: 1, category: "a" },
        { id: 2, category: "a" },
      ],
      b: [{ id: 3, category: "b" }],
    });
  });
});
