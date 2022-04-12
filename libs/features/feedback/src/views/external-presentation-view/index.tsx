/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import { externalPresentationMock, liveResultsAnswers } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { PresentationLiveSummary } from "../../components";
import { getRemainingTime } from "../../utils";
import { CurrentQuestionView } from "../current-question-view";
import { LiveResultsView } from "../live-results";

// TODO remove when getting data from the server will be ready
const getAnswerById = (id: string) => {
  return liveResultsAnswers.find(answer => answer.id === id);
};

const LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY = "lastSubmitedQuestionId";

export const ExternalPresentationView: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation(TranslationNamespace.Feedback);

  if (externalPresentationMock.id !== params.id) {
    return <Typography variant='h1'>{t("notFoundPresentation")}</Typography>;
  }

  const { questions, timer, startTime, currentTime } = externalPresentationMock;
  const questionsCount = questions.length;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);

  const isFinished = questionsCount <= currentQuestionIndex;

  const currentQuestion = questions[currentQuestionIndex];

  const localStorageLastSubmitedQuestionId = localStorage.getItem(LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY);
  const [isSubmit, setIsSubmit] = useState(currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id);

  const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  const liveResultData = isSubmit ? getAnswerById(currentQuestion.id) : undefined;
  if (liveResultData) {
    const remainingTime = getRemainingTime(startTime, liveResultData.current, timer);
    if (timeToElapse !== remainingTime) setTimeToElapse(remainingTime);
  }

  const handleSubmit = (value?: Record<string, string> | undefined) => {
    // TODO replace with sending current value to the server as a userAnswer
    console.log(value ? value.userAnswer : "");
    localStorage.setItem(LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY, currentQuestion.id);
    setIsSubmit(true);
  };

  const handleTimeElapsed = () => {
    setTimeToElapse(timer);
    setCurrentQuestionIndex(prevState => prevState + 1);
    setIsSubmit(false);
  };

  if (isFinished) {
    // TODO replace with getting data from the server
    const summaryData = liveResultsAnswers;
    return <PresentationLiveSummary questions={summaryData} />;
  }

  if (isSubmit && !liveResultData) return <Loader type={LoaderType.Circular} />;

  if (isSubmit && liveResultData)
    return <LiveResultsView data={liveResultData} timeToElapse={timeToElapse} onTimeElapsed={handleTimeElapsed} />;

  return (
    <CurrentQuestionView
      number={currentQuestionIndex + 1}
      question={currentQuestion}
      timeToElapse={timeToElapse}
      onTimeElapsed={handleTimeElapsed}
      onSubmit={handleSubmit}
      key={currentQuestionIndex}
    />
  );
};
