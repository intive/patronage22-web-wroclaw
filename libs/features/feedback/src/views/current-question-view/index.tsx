import { Form, FormFieldType, Timer, TranslationNamespace } from "@patronage-web/shared";
import { ExternalQuestion, ParticipationQuestionType } from "@patronage-web/shared-data";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface CurrentQuestionViewProps {
  question: ExternalQuestion;
  timeToElapse: number;
  onTimeElapsed: () => void;
  onSubmit: () => void;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({
  question: { number, title, type, answers },
  timeToElapse,
  onTimeElapsed,
  onSubmit
}) => {
  const { t } = useTranslation(TranslationNamespace.Common);

  const [userAnswer, setUserAnswer] = useState(answers ? answers[0] : "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserAnswer((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    onSubmit();
    console.log(userAnswer);
  };

  const answersField = {
    [ParticipationQuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "posibleAnswers",
        options: answers,
        onChange: handleChange,
        value: userAnswer,
        hideEditIcon: true
      }
    ],
    [ParticipationQuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "userAnswer",
        onChange: handleChange,
        hideEditIcon: true
      }
    ]
  };

  return (
    <Styled.CurrentQuestionViewContainer>
      <Styled.QuestionFormCard>
        <Form
          title={`${number} ${title}`}
          validationSchema={{}}
          fields={answersField[type]}
          customButtons={{ submit: { condition: true, text: t("submit") } }}
          onSubmit={handleSubmit}
        />
      </Styled.QuestionFormCard>
      <Timer onTimeElapsed={onTimeElapsed} timeToElapse={timeToElapse} />
    </Styled.CurrentQuestionViewContainer>
  );
};
