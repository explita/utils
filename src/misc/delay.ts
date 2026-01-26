/**
 * Returns a Promise that resolves after the specified number of milliseconds.
 * @param ms The number of milliseconds to wait before resolving the Promise.
 *           Defaults to 2000 (2 seconds) if omitted.
 */
export function delay(ms: number = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
