/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import { ExternalPresentationMock, FeedbackQuestionAnswers, LiveResultsAnswers } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { PresentationLiveSummary } from "../../components";
import { getRemainingTime } from "../../utils";
import { CurrentQuestionView } from "../current-question-view";
import { LiveResultsView } from "../live-results";

// TODO remove when getting data from the server will be ready
const getAnswerById = (id: string) => {
  const feedbackAnswer = LiveResultsAnswers.find(answer => answer.id === id);

  return feedbackAnswer;
};

const LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY = "lastSubmitedQuestionId";

export const ExternalPresentationView: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation(TranslationNamespace.Feedback);

  if (ExternalPresentationMock.id !== params.id) {
    return <Typography variant='h1'>{t("notFoundPresentation")}</Typography>;
  }

  const { questions, timer, startTime, currentTime } = ExternalPresentationMock;
  const questionsCount = questions.length;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);
  const [currentQuestion, setCurrentQuestion] = useState(questions[startQuestionIndex]);

  const localStorageLastSubmitedQuestionId = localStorage.getItem(LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY);
  const [isSubmit, setIsSubmit] = useState(currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id);

  const [liveResultData, setLiveResultData] = useState<FeedbackQuestionAnswers>();

  const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  const handleSubmit = (value?: Record<string, string> | undefined) => {
    // TODO add sending current value to the server as a userAnswer
    // TODO replace with getting data from the server
    const feedbackData = getAnswerById(currentQuestion.id);
    setLiveResultData(feedbackData);
    setTimeToElapse(feedbackData ? getRemainingTime(startTime, feedbackData.current, timer) : 0);
    localStorage.setItem(LAST_SUBMITTED_QUESTION_ID_LOCAL_STORAGE_KEY, currentQuestion.id);
    setIsSubmit(true);
  };

  const handleTimeElapsed = () => {
    setTimeToElapse(timer);
    setCurrentQuestion(questions[currentQuestionIndex + 1]);
    setCurrentQuestionIndex(prevState => prevState + 1);
    setIsSubmit(false);
  };

  if (questionsCount <= currentQuestionIndex) {
    // TODO replace with getting data from the server
    const summaryData = LiveResultsAnswers;
    return <PresentationLiveSummary questions={summaryData} />;
  }

  if (!isSubmit)
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

  if (liveResultData)
    return <LiveResultsView data={liveResultData} timeToElapse={timeToElapse} onTimeElapsed={handleTimeElapsed} />;

  // TODO replace with getting data from the server
  const feedbackData = getAnswerById(currentQuestion.id);
  if (feedbackData) {
    setLiveResultData(feedbackData);
    setTimeToElapse(getRemainingTime(startTime, feedbackData.current, timer));
  }

  return <Loader type={LoaderType.Circular} />;
};
