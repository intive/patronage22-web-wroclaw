/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface SampleStateInterface {
  text: string;
}

const initialState: SampleStateInterface = {
  text: "Hello!"
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
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
