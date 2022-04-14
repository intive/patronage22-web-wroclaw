import { AppState } from "../../../types";

export const selectCurrentQuestionIndex = (state: AppState) => state.externalPresentation.currentQuestionIndex;
export const selectIsQuestionSubmit = (state: AppState) => state.externalPresentation.isQuestionSubmit;
export const selectTimeToElapse = (state: AppState) => state.externalPresentation.timeToElapse;
