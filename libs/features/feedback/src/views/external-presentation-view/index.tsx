/* eslint-disable no-nested-ternary */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import { ExternalPresentation, FeedbackQuestionAnswers, LiveResultsAnswers } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getRemainingTime } from "../../utils";
import { LiveResultsView } from "..";
import { CurrentQuestionView } from "../current-question-view";

export interface ExternalPresentationViewProps {
  presentation: ExternalPresentation;
}

const getFeedbackAnswerData = (id: string) => {
  const feedbackAnswer = LiveResultsAnswers.find(answer => answer.id === id);

  return feedbackAnswer;
};

export const ExternalPresentationView: React.FC<ExternalPresentationViewProps> = ({
  presentation: { questions, timer, startTime, currentTime }
}) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);
  const questionsCount = questions.length;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);
  const [currentQuestion, setCurrentQuestion] = useState(questions[startQuestionIndex]);
  const localStorageLastSubmitedQuestionId = localStorage.getItem("lastSubmitedQuestionId");
  const [isSubmit, setIsSubmit] = useState(currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id);

  const [liveResultData, setLiveResultData] = useState<FeedbackQuestionAnswers>();

  const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  const handleSubmit = (value?: Record<string, string> | undefined) => {
    console.log("value", value ? value.userAnswer : "brak");
    const feedbackData = getFeedbackAnswerData(currentQuestion.id);
    setLiveResultData(feedbackData);
    setTimeToElapse(feedbackData ? getRemainingTime(startTime, feedbackData.current, timer) : 0);
    localStorage.setItem("lastSubmitedQuestionId", currentQuestion.id);
    setIsSubmit(true);
  };

  const handleTimeElapsed = () => {
    setTimeToElapse(timer);
    setCurrentQuestion(questions[currentQuestionIndex + 1]);
    setCurrentQuestionIndex(prevState => prevState + 1);
    setIsSubmit(false);
  };

  if (questionsCount <= currentQuestionIndex) return <Typography>{t("summary")}</Typography>;

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

  const feedbackData = getFeedbackAnswerData(currentQuestion.id);
  if (feedbackData) {
    setLiveResultData(feedbackData);
    setTimeToElapse(getRemainingTime(startTime, feedbackData.current, timer));
  }

  return <Loader type={LoaderType.Circular} />;
};
