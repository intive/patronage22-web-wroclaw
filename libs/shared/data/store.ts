import { configureStore } from "@reduxjs/toolkit";

import { notificationReducer, sampleReducer } from "./features";
import { FeedbackSliceName } from "./features/feedback/types";

export const store = configureStore({
  reducer: {
    // TODO - remove when proper reducers will be ready
    [FeedbackSliceName.Sample]: sampleReducer,
    [FeedbackSliceName.Notification]: notificationReducer
  }
});
