/**
 * Rejects a promise if it does not settle within a specified duration.
 *
 * @example
 * await timeout(fetchData(), 5000, "Request timed out")
 *
 * @param promise The promise to wait for.
 * @param ms Maximum time to wait in milliseconds.
 * @param errorMessage Optional custom error message.
 * @returns The resolved value of the promise.
 */
export function timeout<T>(
  promise: Promise<T>,
  ms: number,
  errorMessage: string = `Operation timed out after ${ms}ms`,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(errorMessage));
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}
