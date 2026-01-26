import type { AxiosError } from "axios";

type SuccessResponse<T> = readonly [T, null];
type FailureResponse<E> = readonly [null, E];
type TryCatchResponse<T, E> = SuccessResponse<T> | FailureResponse<E>;
type TryCatchOpts = {
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
    return [data, null] as const;
  } catch (error) {
    if (options?.logError) {
      console.error(error);
    }
    return [null, error as E] as const;
  }
}

/**
 * Specialized tryCatch for Axios requests.
 * Automatically casts the error to AxiosError for better IDE support.
 *
 * @template T The type of the response data.
 * @param {Promise<T> | (() => Promise<T>)} promiseOrFn - The axios promise or thunk.
 * @param {TryCatchOpts} [options] - Optional configuration.
 * @returns {Promise<TryCatchResponse<T, AxiosError>>}
 */
export async function tryAxios<T>(
  promiseOrFn: Promise<T> | (() => T | Promise<T>),
  options?: TryCatchOpts,
): Promise<TryCatchResponse<T, AxiosError>> {
  return tryCatch<T, AxiosError>(promiseOrFn, options);
}
