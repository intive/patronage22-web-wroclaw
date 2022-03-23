import { Form, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { ExternalQuestion, QuestionType } from "@patronage-web/shared-data";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface CurrentQuestionViewProps {
  question: ExternalQuestion;
  onSubmit: () => void;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({ question, onSubmit }) => {
  const { id, number, title, type, answers } = question;

  const { t } = useTranslation(TranslationNamespace.Common);

  const [usersAnswer, setUsersAnswer] = useState(answers ? answers[0] : "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsersAnswer((event.target as HTMLInputElement).value);
  };
  const validationSchema = {};
  const handleSubmit = () => {
    onSubmit();
    console.log(usersAnswer);
  };

  const answersField = {
    [QuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "posibleAnswers",
        options: answers,
        onChange: handleChange,
        value: usersAnswer,
        hideEditIcon: true
      }
    ],
    [QuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "usersAnswer",
        onChange: handleChange,
        hideEditIcon: true
      }
    ]
  };

  return (
    <Styled.QuestionFormCard>
      <Form
        title={`${number} ${title}`}
        validationSchema={validationSchema}
        fields={answersField[type]}
        customButtons={{ submit: { condition: true, text: t("submit") } }}
        onSubmit={handleSubmit}
      />
    </Styled.QuestionFormCard>
  );
};
