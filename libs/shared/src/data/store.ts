import { configureStore } from "@reduxjs/toolkit";

import { presentationApiMiddleware, presentationApiReducer } from "./features";
import { FeedbackSliceName } from "./features/feedback/types";
import { logger } from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    [FeedbackSliceName.PresentationApi]: presentationApiReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger).concat(presentationApiMiddleware)
});
