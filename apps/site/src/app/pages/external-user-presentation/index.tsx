import { Button, Typography } from "@mui/material";
import { CurrentQuestionView } from "@patronage-web/features-feedback";
import { Timer } from "@patronage-web/shared";
import { ExternalPresentationMock } from "@patronage-web/shared-data";
import { useState } from "react";

import * as Styled from "./styled";

const ExternalUserPresentationPage: React.FC = () => {
  const { questions, timer, startTime, currentTime } = ExternalPresentationMock;
  const startQuestionIndex = Math.floor((currentTime - startTime) / timer);
  const startQuestionTime = timer - ((currentTime - startTime) % timer);
  const [questionIndex, setQuestionIndex] = useState(startQuestionIndex);
  const [time, setTime] = useState(startQuestionTime);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => setIsSubmit(true);
  const handleBtnClick = () => {
    setTime(timer);
    setQuestionIndex(questionIndex + 1);
    setIsSubmit(false);
  };

  const view = () => {
    return (
      <Styled.ViewContainer>
        {!isSubmit ? (
          <CurrentQuestionView question={questions[questionIndex]} onSubmit={handleSubmit} />
        ) : (
          <Button onClick={handleBtnClick}>Live Results</Button>
        )}
        <Timer initialTimeMsec={time * 1000} onTimeElapsed={handleBtnClick} label='' key={questions[questionIndex].id} />
      </Styled.ViewContainer>
    );
  };

  return (
    // TODO - replace when proper data will be delivered
    // <h1>Presentation page for external user</h1>
    questionIndex < questions.length ? view() : <Typography>Thanks!</Typography>
  );
};

export default ExternalUserPresentationPage;
