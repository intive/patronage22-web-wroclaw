import { configureStore } from "@reduxjs/toolkit";

import { notificationReducer } from "./features";
import { FeedbackSliceName } from "./features/feedback/types";
import { logger } from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    [FeedbackSliceName.Notification]: notificationReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});
