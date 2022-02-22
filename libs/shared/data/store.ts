import { configureStore } from "@reduxjs/toolkit";

import { sampleSlice } from "./feedback/mocks/sample-reducer";

export const store = configureStore({
  reducer: {
    // TODO - remove when proper reducers will be ready
    sample: sampleSlice.reducer
  }
});
