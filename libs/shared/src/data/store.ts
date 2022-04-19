import { configureStore } from "@reduxjs/toolkit";

import { FeedbackSliceName, presentationsMiddleware, presentationsReducer } from "./features";
import { logger } from "./middlewares/logger";
import { authReducer, notificationReducer, SiteSliceName } from "./site";

export const store = configureStore({
  reducer: {
    [FeedbackSliceName.Presentations]: presentationsReducer,
    [SiteSliceName.Notification]: notificationReducer,
    [SiteSliceName.Auth]: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(presentationsMiddleware).concat(logger)
});
