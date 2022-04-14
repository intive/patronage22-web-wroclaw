import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRemainingTime } from "../../../../utils";
/* eslint-disable no-param-reassign */
import { FeedbackSliceName } from "../types";

export interface ExternalPresentationState {
  currentQuestionIndex: number;
  isQuestionSubmit: boolean;
  timeToElapse: number | undefined;
}

const initialState: ExternalPresentationState = {
  currentQuestionIndex: -1,
  isQuestionSubmit: false,
  timeToElapse: undefined
};

export const externalPresentationSlice = createSlice({
  name: FeedbackSliceName.ExternalPresentation,
  initialState,
  reducers: {
    countStartQuestionIndex: (state, action: PayloadAction<{ startTime: number; currentTime: number; timer: number }>) => {
      const startQuestionIndex = Math.floor((action.payload.currentTime - action.payload.startTime) / action.payload.timer);
      if (startQuestionIndex > state.currentQuestionIndex) state.currentQuestionIndex = startQuestionIndex;
    },
    setQuestionSubmitted: state => {
      state.isQuestionSubmit = true;
    },
    setTimeToElapse: (state, action: PayloadAction<number>) => {
      state.timeToElapse = action.payload;
    },
    countTimeToElapse: (state, action: PayloadAction<{ startTime: number; currentTime: number; timer: number }>) => {
      state.timeToElapse = getRemainingTime(action.payload.startTime, action.payload.currentTime, action.payload.timer);
    },
    goToNextQuestion: (state, action: PayloadAction<number>) => {
      state.timeToElapse = action.payload;
      state.currentQuestionIndex += 1;
      state.isQuestionSubmit = false;
    }
  }
});

export const externalPresenationReducer = externalPresentationSlice.reducer;
