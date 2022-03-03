import { createLogger } from "redux-logger";

export const logger = createLogger({
  duration: true,
  diff: true
});
