import { useState, useCallback } from "react";

export interface UseClipboardReturn {
  /** Copies text to the clipboard */
  copy: (text: string) => Promise<boolean>;
  /** Whether the text was successfully copied recently */
  copied: boolean;
  /** Error message if copying failed */
  error: Error | null;
}

/**
 * Hook to copy text to the user's clipboard with auto-resetting copied state.
 *
 * @param timeout Duration in ms to keep the `copied` state as true (default: 2000).
 * @returns An object with `copy` function, `copied` boolean, and `error`.
 */
export function useClipboard(timeout = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (typeof window === "undefined" || !navigator.clipboard) {
        setError(new Error("Clipboard API not supported in this environment"));
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setCopied(false);
        return false;
      }
    },
    [timeout],
  );

  return { copy, copied, error };
}
