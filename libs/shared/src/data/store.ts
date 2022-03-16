import { configureStore } from "@reduxjs/toolkit";

import { logger } from "./middlewares/logger";
import { notificationReducer, SiteSliceName } from "./site";

export const store = configureStore({
  reducer: {
    [SiteSliceName.Notification]: notificationReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger).concat(presentationApiMiddleware)
});
