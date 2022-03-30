import { configureStore } from "@reduxjs/toolkit";

import { FeedbackSliceName, presentationsMiddleware, presentationsReducer } from "./features";
import { logger } from "./middlewares/logger";
import { notificationReducer, SiteSliceName } from "./site";

export const store = configureStore({
  reducer: {
    [FeedbackSliceName.Presentations]: presentationsReducer,
    [SiteSliceName.Notification]: notificationReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(presentationsMiddleware).concat(logger)
});
