import { TryCatchOpts, TryCatchResponse } from "../misc/try-catch.js";
import { normalizeAxiosError, NormalizedAxiosError } from "./lib/utils.js";
import { AxiosResponse } from "axios";

/**
 * Specialized tryCatch for Axios requests.
 * Returns the response data directly instead of the response object.
 * Automatically casts the error to AxiosError for better IDE support.
 *
 * @template T The type of the response data.
 * @param {Promise<AxiosResponse<T>> | (() => Promise<AxiosResponse<T>>)} promiseOrFn - The axios promise or thunk.
 * @param {TryCatchOpts} [options] - Optional configuration.
 * @returns {Promise<TryCatchResponse<T, NormalizedAxiosError<E>>>}
 */
export async function tryAxios<
  T = any,
  E extends { message: string; errors: any; [key: string]: any } = {
    message: string;
    errors: any;
  },
>(
  promiseOrFn:
    | Promise<AxiosResponse<T>>
    | (() => AxiosResponse<T> | Promise<AxiosResponse<T>>),
  options?: TryCatchOpts,
): Promise<TryCatchResponse<T, NormalizedAxiosError<E>>> {
  try {
    const response =
      typeof promiseOrFn === "function"
        ? await promiseOrFn()
        : await promiseOrFn;

    if (!response || typeof response !== "object" || !("data" in response)) {
      throw new Error("Invalid axios response");
    }

    return [response.data, null];
  } catch (error) {
    if (options?.logError) {
      console.error(error);
    }

    return [null, normalizeAxiosError(error)];
  }
}
