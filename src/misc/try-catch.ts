export type TryCatchResponse<T, E> = [T, null] | [null, E];
export type TryCatchOpts = {
  logError?: boolean;
};

/**
 * Executes a function or a promise and returns a tuple with the result or the error.
 *
 * This allows for a cleaner error handling pattern without the need for try-catch blocks.
 *
 * @template T The type of the result.
 * @template E The type of the error.
 * @param {Promise<T> | (() => T | Promise<T>)} promiseOrFn - The promise or function to execute.
 * @param {TryCatchOpts} [options] - Optional configuration for the tryCatch block.
 * @returns {Promise<TryCatchResponse<T, E>>} - A promise that resolves to a tuple containing the result and the error.
 */
export async function tryCatch<T, E = Error>(
  promiseOrFn: Promise<T> | (() => T | Promise<T>),
  options?: TryCatchOpts,
): Promise<TryCatchResponse<T, E>> {
  try {
    const data = await (typeof promiseOrFn === "function"
      ? (promiseOrFn as () => T | Promise<T>)()
      : promiseOrFn);
    return [data, null];
  } catch (error) {
    if (options?.logError) {
      console.error(error);
    }
    return [null, error as E];
  }
}
