/* eslint-disable no-nested-ternary */
import { Button, Typography } from "@mui/material";
import { Timer } from "@patronage-web/shared";
import { ExternalPresentation, LiveResultsAnswers } from "@patronage-web/shared-data";
import { useState } from "react";

import { getRemainingTime } from "../../utils";
import { CurrentQuestionView } from "../current-question-view";

export interface ExternalPresentationViewProps {
  presentation: ExternalPresentation;
}

export const ExternalPresentationView: React.FC<ExternalPresentationViewProps> = ({
  presentation: { questions, timer, startTime, currentTime }
}) => {
  const questionsCount = questions.length;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);

  const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  const localStorageLastSubmitedQuestionId = window.localStorage.getItem("lastSubmitedQuestionId");
  const [isSubmit, setIsSubmit] = useState(
    questions[currentQuestionIndex] && localStorageLastSubmitedQuestionId === questions[currentQuestionIndex].id
  );

  const handleSubmit = () => {
    const liveResultData = LiveResultsAnswers;
    const liveResultRemainingTime = getRemainingTime(liveResultData.created, liveResultData.current, timer);
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
    <Typography>Thanks!</Typography>
  ) : !isSubmit ? (
    <CurrentQuestionView
      question={questions[currentQuestionIndex]}
      timeToElapse={timeToElapse}
      onTimeElapsed={handleTimeElapsed}
      onSubmit={handleSubmit}
      key={currentQuestionIndex}
    />
  ) : (
    <>
      <Button onClick={handleTimeElapsed}>Live results{currentQuestionIndex}</Button>
      <Timer timeToElapse={timeToElapse} onTimeElapsed={handleTimeElapsed} key={currentQuestionIndex} />
    </>
  );
};
