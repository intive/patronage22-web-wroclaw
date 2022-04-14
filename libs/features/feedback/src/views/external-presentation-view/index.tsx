/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import {
  countStartQuestionIndex,
  countTimeToElapse,
  externalPresentationMock,
  goToNextQuestion,
  liveResultsAnswers,
  selectCurrentQuestionIndex,
  selectIsQuestionSubmit,
  selectTimeToElapse,
  setQuestionSubmitted
} from "@patronage-web/shared-data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PresentationLiveSummary } from "../../components";
import { CurrentQuestionView, LiveResultsView } from "../index";

// TODO remove when getting data from the server will be ready
const getAnswerById = (id: string) => liveResultsAnswers.find(answer => answer.id === id);

const LAST_SUBMITTED_QUESTION_ID_KEY = "lastSubmitedQuestionId";

export const ExternalPresentationView: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation(TranslationNamespace.Feedback);

  if (externalPresentationMock.id !== params.id) {
    return <Typography variant='h1'>{t("notFoundPresentation")}</Typography>;
  }

  const dispatch = useDispatch();
  const { questions, timer, startTime, currentTime } = externalPresentationMock;
  const questionsCount = questions.length;

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  if (currentQuestionIndex === -1) dispatch(countStartQuestionIndex({ startTime, currentTime, timer }));

  const isFinished = questionsCount <= currentQuestionIndex;
  const currentQuestion = questions[currentQuestionIndex];
  const isSubmit = useSelector(selectIsQuestionSubmit);
  const timeToElapse = useSelector(selectTimeToElapse);

  const liveResultData = isSubmit ? getAnswerById(currentQuestion.id) : undefined;
  if (liveResultData) dispatch(countTimeToElapse({ startTime, currentTime: liveResultData.current, timer }));

  const handleSubmit = (value?: Record<string, string>) => {
    // TODO replace with sending current value to the server as a userAnswer
    console.log(value ? value.userAnswer : "");
    localStorage.setItem(LAST_SUBMITTED_QUESTION_ID_KEY, currentQuestion.id);
    dispatch(setQuestionSubmitted());
  };

  const handleTimeElapsed = () => {
    dispatch(goToNextQuestion(timer));
  };

  useEffect(() => {
    const localStorageLastSubmitedQuestionId = localStorage.getItem(LAST_SUBMITTED_QUESTION_ID_KEY);
    if (currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id) dispatch(setQuestionSubmitted());
    dispatch(countTimeToElapse({ startTime, currentTime, timer }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFinished) {
    // TODO replace with getting data from the server
    localStorage.removeItem(LAST_SUBMITTED_QUESTION_ID_KEY);
    const summaryData = liveResultsAnswers;
    return <PresentationLiveSummary questions={summaryData} />;
  }

  if ((isSubmit && !liveResultData) || !timeToElapse) return <Loader type={LoaderType.Circular} />;

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
