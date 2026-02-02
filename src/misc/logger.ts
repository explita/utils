const shouldLog = process.env.LOG_INFO === "true";

type LogFn = (...args: unknown[]) => void;

const baseLog: LogFn = (...args) => {
  if (shouldLog) console.log(...args);
};

export const logger = baseLog as LogFn & {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
};

logger.error = (...args) => {
  if (shouldLog) console.error(...args, "\nCaller:\n", getCallerStack());
};

logger.warn = (...args) => {
  if (shouldLog) console.warn(...args);
};

logger.info = (...args) => {
  if (shouldLog) console.info(...args);
};

function getCallerStack() {
  const err = new Error();
  return err.stack?.split("\n").slice(3).join("\n");
}
