import { TryCatchOpts, TryCatchResponse } from "../misc/try-catch.js";
import { normalizeAxiosError, NormalizedAxiosError } from "./lib/utils.js";

/**
 * Specialized tryCatch for Axios requests.
 * Automatically casts the error to AxiosError for better IDE support.
 *
 * @template T The type of the response data.
 * @param {Promise<T> | (() => Promise<T>)} promiseOrFn - The axios promise or thunk.
 * @param {TryCatchOpts} [options] - Optional configuration.
 * @returns {Promise<TryCatchResponse<T, NormalizedAxiosError>>}
 */
export async function tryAxios<T>(
  promiseOrFn: Promise<T> | (() => T | Promise<T>),
  options?: TryCatchOpts,
): Promise<TryCatchResponse<T, NormalizedAxiosError>> {
  try {
    const response =
      typeof promiseOrFn === "function"
        ? await promiseOrFn()
        : await promiseOrFn;

    if (!response || typeof response !== "object" || !("data" in response)) {
      throw new Error("Invalid axios response");
    }

    return [response.data as T, null];
  } catch (error) {
    if (options?.logError) {
      console.error(error);
    }

    return [null, normalizeAxiosError(error)];
  }
}
