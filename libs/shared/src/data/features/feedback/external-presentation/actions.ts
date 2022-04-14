import { externalPresentationSlice } from "./external-presentation-slice";

export const { countStartQuestionIndex, setQuestionSubmitted, setTimeToElapse, countTimeToElapse, goToNextQuestion } =
  externalPresentationSlice.actions;
