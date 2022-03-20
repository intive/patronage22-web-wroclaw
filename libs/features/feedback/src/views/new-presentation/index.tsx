import { BaseButton, ButtonType, FormCard } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { BasicPresentationInfo, NewQuestion } from "../../components";
import * as Styled from "./styled";

const NewQuestionCard = {
  name: "questionCard",
  children: <NewQuestion />
};

export const NewPresentationView: React.FC = () => {
  const { t } = useTranslation();

  const [questions, setQuestions] = useState([NewQuestionCard]);

  const handleNewQuestion = () => {
    setQuestions([...questions, NewQuestionCard]);
  };

  return (
    <Styled.NewPresentationWrapper>
      <BasicPresentationInfo />
      {questions.map(question => (
        <FormCard>{question.children}</FormCard>
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleNewQuestion}>
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
