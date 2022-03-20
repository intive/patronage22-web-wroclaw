import { Button, Typography } from "@mui/material";
import { CurrentQuestionView } from "@patronage-web/features-feedback";
import { Timer } from "@patronage-web/shared";
import { ExternalPresentationMock } from "@patronage-web/shared-data";
import { useState } from "react";

const ExternalUserPresentationPage: React.FC = () => {
  const { questions, timer } = ExternalPresentationMock;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => setIsSubmit(true);
  const handleBtnClick = () => {
    setQuestionIndex(questionIndex + 1);
    setIsSubmit(false);
  };

  const view = (
    <>
      {!isSubmit ? (
        <CurrentQuestionView question={questions[questionIndex]} onSubmit={handleSubmit} />
      ) : (
        <Button onClick={handleBtnClick}>Live Results</Button>
      )}
      <Timer initialTimeMsec={timer * 1000} onTimeElapsed={handleBtnClick} label='' key={questionIndex} />
    </>
  );

  return (
    // TODO - replace when proper data will be delivered
    // <h1>Presentation page for external user</h1>
    questionIndex < questions.length ? view : <Typography>Thanks!</Typography>
  );
};

export default ExternalUserPresentationPage;
