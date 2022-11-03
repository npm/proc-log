declare type LogLevel =
  | "notice"
  | "error"
  | "warn"
  | "info"
  | "verbose"
  | "http"
  | "silly"
  | "pause"
  | "resume"

declare type Logger = {
  [K in LogLevel]: (...args: any[]) => void;
} & {
  LEVELS: [
    "notice",
    "error",
    "warn",
    "info",
    "verbose",
    "http",
    "silly",
    "pause",
    "resume"
  ]
}

declare const logger: Logger

export = logger
