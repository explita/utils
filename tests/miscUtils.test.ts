import { isEmpty, isValidEmail, delay, tryCatch } from "../src";

describe("isEmpty", () => {
  test("should return true for null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  test("should return false for 'yes'", () => {
    expect(isEmpty("yes")).toBe(false);
  });

  test("should return true for {}", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("should return false for {key: 'value'}", () => {
    expect(isEmpty({ key: "value" })).toBe(false);
  });

  test("should return false for [1]", () => {
    expect(isEmpty([1])).toBe(false);
  });

  test("should return true for []", () => {
    expect(isEmpty([])).toBe(true);
  });
});

// describe("isValidPhone", () => {
//   test("should return true for a valid phone number", () => {
//     expect(isValidPhone("+1 1234567")).toBe(true);
//   });

//   test("should return false for an invalid phone number", () => {
//     expect(isValidPhone("abc")).toBe(false);
//   });
// });

describe("isValidEmail", () => {
  test("should return true for a valid email address", () => {
    expect(isValidEmail("aaa@bbb.ccc")).toBe(true);
  });

  test("should return false for an invalid email address", () => {
    expect(isValidEmail("aaa")).toBe(false);
  });
});

describe("misc utilities", () => {
  test("delay should resolve after specified time", async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });

  test("tryCatch should return result on success", async () => {
    const [result, error] = await tryCatch(() => "success");
    expect(result).toBe("success");
    expect(error).toBeNull();
  });

  test("tryCatch should return error on failure", async () => {
    const [result, error] = await tryCatch(() => {
      throw new Error("failure");
    });
    expect(result).toBeNull();
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe("failure");
  });
});
