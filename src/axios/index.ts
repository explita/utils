import type { AxiosError } from "axios";
import { tryCatch, TryCatchOpts, TryCatchResponse } from "../misc/try-catch.js";

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
