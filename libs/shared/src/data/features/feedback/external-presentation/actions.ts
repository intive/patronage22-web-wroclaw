import { externalPresentationSlice } from "./external-presentation-slice";

export const { setCurrentQuestionIndex, setQuestionSubmitted, setTimeToElapse, goToNextQuestion } =
  externalPresentationSlice.actions;
