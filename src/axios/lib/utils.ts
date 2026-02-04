import axios, { AxiosError } from "axios";

export type ErrorKind = "network" | "logic" | "unknown";

export type NormalizedAxiosError = AxiosError & {
  kind: ErrorKind;
  meta?: {
    name?: string;
    message?: string;
    stack?: string;
  };
};

type ErrorSnapshot = {
  name?: string;
  message?: string;
  stack?: string;
};

export function normalizeAxiosError(error: unknown): NormalizedAxiosError {
  if (axios.isAxiosError(error)) {
    return Object.assign(error, {
      kind: detectErrorKind(error),
      meta: toErrorSnapshot(error),
    });
  }

  const axiosError = new AxiosError(
    error instanceof Error ? error.message : "Unknown error",
    "UNKNOWN",
  );

  return Object.assign(axiosError, {
    kind: detectErrorKind(error),
    meta: toErrorSnapshot(error),
  });
}

function detectErrorKind(error: unknown): ErrorKind {
  if (axios.isAxiosError(error)) {
    // No response usually means network / CORS / timeout
    if (!error.response) return "network";
    return "logic"; // server responded with 4xx / 5xx
  }

  if (error instanceof Error) {
    return "logic"; // bugs, thrown errors, bad assumptions
  }

  return "unknown";
}

function toErrorSnapshot(error: unknown): ErrorSnapshot | undefined {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    message: String(error),
  };
}
