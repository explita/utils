/**
 * Retries an asynchronous function a specified number of times until it succeeds
 * or the retry count is exhausted.
 *
 * @template T The type of the value that the function returns.
 * @param fn The asynchronous function to retry.
 * @param retries The number of times to retry the function. Must be a positive number.
 *                Defaults to 3 if not specified.
 * @returns A Promise that resolves with the function's return value if it succeeds,
 *          or rejects with the last error encountered if all retries fail.
 * @throws {TypeError} If the first argument is not a function.
 * @throws {RangeError} If the retries parameter is not a positive number.
 * @throws {Error} If the function does not succeed within the retry attempts.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
): Promise<T> {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function as the first argument");
  }
  if (typeof retries !== "number" || retries < 1) {
    throw new RangeError("Retries must be a positive number");
  }

  let lastError: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (i === retries - 1) {
        throw lastError;
      }
    }
  }
  throw new Error(
    "Unexpected error: function should have either succeeded or thrown the last error",
  );
}
