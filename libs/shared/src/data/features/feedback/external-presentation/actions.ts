import { externalPresentationSlice } from "./external-presentation-slice";

export const { calculateStartQuestionIndex, submitQuestion, calculateTimeToElapse, goToNextQuestion } =
  externalPresentationSlice.actions;
