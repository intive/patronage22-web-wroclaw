import { BaseButton, ButtonType } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { BasicPresentationInfo, NewQuestionCard } from "../../components";
import * as Styled from "./styled";

const NewQuestion = {
  name: "questionCard",
  children: <NewQuestionCard />
};

export const NewPresentationView: React.FC = () => {
  const { t } = useTranslation();

  const [questions, setQuestions] = useState([NewQuestion]);

  const handleNewQuestion = () => {
    setQuestions([...questions, NewQuestion]);
  };

  return (
    <Styled.NewPresentationWrapper>
      <BasicPresentationInfo />
      {questions.map(question => question.children)}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleNewQuestion}>
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
