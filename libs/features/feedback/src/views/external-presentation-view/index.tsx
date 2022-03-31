/* eslint-disable no-nested-ternary */
import { Button, Typography } from "@mui/material";
import { TranslationNamespace } from "@patronage-web/shared";
import { ExternalPresentation, LiveResultsAnswers } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getRemainingTime } from "../../utils";
import { CurrentQuestionView } from "../current-question-view";

export interface ExternalPresentationViewProps {
  presentation: ExternalPresentation;
}

export const ExternalPresentationView: React.FC<ExternalPresentationViewProps> = ({
  presentation: { questions, timer, startTime, currentTime }
}) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);
  const questionsCount = questions.length;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);

  const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  const localStorageLastSubmitedQuestionId = window.localStorage.getItem("lastSubmitedQuestionId");
  const [isSubmit, setIsSubmit] = useState(
    questions[currentQuestionIndex] && localStorageLastSubmitedQuestionId === questions[currentQuestionIndex].id
  );

  const handleSubmit = (value?: Record<string, string> | undefined) => {
    console.log("value", value ? value.userAnswer : "brak");
    const liveResultData = LiveResultsAnswers;
    const liveResultRemainingTime = getRemainingTime(startTime, liveResultData.current, timer);
    setTimeToElapse(liveResultRemainingTime);
    window.localStorage.setItem("lastSubmitedQuestionId", questions[currentQuestionIndex].id);
    setIsSubmit(true);
  };

  const handleTimeElapsed = () => {
    setTimeToElapse(timer);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsSubmit(false);
  };

  return questionsCount <= currentQuestionIndex ? (
    // replace with summary?
    <Typography>{t("summary")}</Typography>
  ) : !isSubmit ? (
    <CurrentQuestionView
      number={currentQuestionIndex + 1}
      question={questions[currentQuestionIndex]}
      timeToElapse={timeToElapse}
      onTimeElapsed={handleTimeElapsed}
      onSubmit={handleSubmit}
      key={currentQuestionIndex}
    />
  ) : (
    // replace with <LiveResults> when will be ready
    <Button onClick={handleTimeElapsed}>Live results{currentQuestionIndex}</Button>
  );
};
