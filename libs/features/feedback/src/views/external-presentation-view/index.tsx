/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "@mui/material";
import { Loader, LoaderType, TranslationNamespace } from "@patronage-web/shared";
import {
  externalPresentationMock,
  goToNextQuestion,
  liveResultsAnswers,
  selectCurrentQuestionIndex,
  selectIsQuestionSubmit,
  selectTimeToElapse,
  setCurrentQuestionIndex,
  setQuestionSubmitted,
  setTimeToElapse
} from "@patronage-web/shared-data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PresentationLiveSummary } from "../../components";
import { getRemainingTime } from "../../utils";
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

  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startQuestionIndex);

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  // const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  // if (startQuestionIndex > currentQuestionIndex) dispatch(setCurrentQuestionIndex);

  const isFinished = questionsCount <= currentQuestionIndex;

  const currentQuestion = questions[currentQuestionIndex];

  // const [isSubmit, setIsSubmit] = useState(currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id);
  const isSubmit = useSelector(selectIsQuestionSubmit);
  // console.log(currentQuestion && currentQuestion.id, localStorageLastSubmitedQuestionId);
  //  if (currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id) dispatch(setQuestionSubmitted());

  const timeToElapse = useSelector(selectTimeToElapse);

  const liveResultData = isSubmit ? getAnswerById(currentQuestion.id) : undefined;
  if (liveResultData) {
    const remainingTime = getRemainingTime(startTime, liveResultData.current, timer);
    dispatch(setTimeToElapse(remainingTime));
  } // else {
  //   const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  //   if (startQuestionRemainingTime > timeToElapse) dispatch(setTimeToElapse(startQuestionRemainingTime));
  // }

  // const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
  // const [timeToElapse, setTimeToElapse] = useState(startQuestionRemainingTime);

  // if (isSubmit === false && startQuestionRemainingTime > timeToElapse) dispatch(setTimeToElapse(startQuestionRemainingTime));

  // const liveResultData = isSubmit ? getAnswerById(currentQuestion.id) : undefined;
  // if (liveResultData) dispatch(setTimeToElapse(getRemainingTime(startTime, liveResultData.current, timer)));
  // {
  //   const remainingTime = getRemainingTime(startTime, liveResultData.current, timer);
  //   if (timeToElapse !== remainingTime) dispatch(setTimeToElapse(remainingTime));
  // }

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
    const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
    dispatch(setCurrentQuestionIndex(startQuestionIndex));
    const localStorageLastSubmitedQuestionId = localStorage.getItem(LAST_SUBMITTED_QUESTION_ID_KEY);
    if (currentQuestion && localStorageLastSubmitedQuestionId === currentQuestion.id) dispatch(setQuestionSubmitted());
    const startQuestionRemainingTime = getRemainingTime(startTime, currentTime, timer);
    dispatch(setTimeToElapse(startQuestionRemainingTime));
  }, []);

  if (isFinished) {
    // TODO replace with getting data from the server
    const summaryData = liveResultsAnswers;
    return <PresentationLiveSummary questions={summaryData} />;
  }

  if ((isSubmit && !liveResultData) || !currentQuestion) return <Loader type={LoaderType.Circular} />;

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
