/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import {
  calculateStartQuestionIndex,
  calculateTimeToElapse,
  externalPresentationMock,
  goToNextQuestion,
  liveResultsAnswers,
  selectExternalPresentation,
  submitQuestion
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
  const dispatch = useDispatch();
  const { currentQuestionIndex, isQuestionSubmit: isSubmit, timeToElapse } = useSelector(selectExternalPresentation);

  if (externalPresentationMock.id !== params.id) {
    return <Typography variant='h1'>{t("presentation.notFound")}</Typography>;
  }

  const currentQuestionIndexInitialState = -1;
  const { questions, timer, startTime, currentTime } = externalPresentationMock;
  const questionsCount = questions.length;

  if (currentQuestionIndex === currentQuestionIndexInitialState)
    dispatch(calculateStartQuestionIndex({ startTime, currentTime, timer }));

  const isFinished = questionsCount <= currentQuestionIndex;
  const currentQuestion = questions[currentQuestionIndex];

  const liveResultData = isSubmit ? getAnswerById(currentQuestion.id) : undefined;

  if (liveResultData) dispatch(calculateTimeToElapse({ startTime, currentTime: liveResultData.current, timer }));

  const handleSubmit = (value?: Record<string, string>) => {
    // TODO replace with sending current value to the server as a userAnswer
    console.log(value ? value.userAnswer : "");
    localStorage.setItem(LAST_SUBMITTED_QUESTION_ID_KEY, currentQuestion.id);
    dispatch(submitQuestion());
  };

  const handleTimeElapsed = () => {
    dispatch(goToNextQuestion(timer));
  };

  useEffect(() => {
    const lastSubmittedQuestionId = localStorage.getItem(LAST_SUBMITTED_QUESTION_ID_KEY);

    if (currentQuestion && lastSubmittedQuestionId === currentQuestion.id) {
      dispatch(submitQuestion());
    }

    dispatch(calculateTimeToElapse({ startTime, currentTime, timer }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFinished) {
    // TODO replace with getting data from the server
    localStorage.removeItem(LAST_SUBMITTED_QUESTION_ID_KEY);
    const summaryData = liveResultsAnswers;

    return <PresentationLiveSummary questions={summaryData} />;
  }

  if ((isSubmit && !liveResultData) || !timeToElapse) {
    return <Loader type={LoaderType.Circular} />;
  }

  if (isSubmit && liveResultData) {
    return <LiveResultsView data={liveResultData} timeToElapse={timeToElapse} onTimeElapsed={handleTimeElapsed} />;
  }

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
