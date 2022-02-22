/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    text: "Hello!"
  },
  reducers: {
    greetings: state => {
      state.text = "Hello!";
    },
    farewells: state => {
      state.text = "Goodbye!";
    }
  }
});

export const sampleReducer = sampleSlice.reducer;
