import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRemainingTime } from "../../../../utils";
/* eslint-disable no-param-reassign */
import { FeedbackSliceName } from "../types";

export interface ExternalPresentationState {
  currentQuestionIndex: number;
  isQuestionSubmit: boolean;
  timeToElapse: number | undefined;
}

interface TimeData {
  startTime: number;
  currentTime: number;
  timer: number;
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
    calculateStartQuestionIndex: (state, action: PayloadAction<TimeData>) => {
      const { startTime, currentTime, timer } = action.payload;
      const startQuestionIndex = Math.floor((currentTime - startTime) / timer);

      if (startQuestionIndex > state.currentQuestionIndex) {
        state.currentQuestionIndex = startQuestionIndex;
      }
    },
    submitQuestion: state => {
      state.isQuestionSubmit = true;
    },
    calculateTimeToElapse: (state, action: PayloadAction<TimeData>) => {
      const { startTime, currentTime, timer } = action.payload;
      state.timeToElapse = getRemainingTime(startTime, currentTime, timer);
    },
    goToNextQuestion: (state, action: PayloadAction<number>) => {
      state.timeToElapse = action.payload;
      state.currentQuestionIndex += 1;
      state.isQuestionSubmit = false;
    }
  }
});

export const externalPresentationReducer = externalPresentationSlice.reducer;
