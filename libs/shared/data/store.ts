import { configureStore } from "@reduxjs/toolkit";

import { sampleReducer } from "./features";

export const store = configureStore({
  reducer: {
    // TODO - remove when proper reducers will be ready
    sample: sampleReducer
  }
});
