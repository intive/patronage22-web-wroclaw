import { Form, FormFieldType, Timer, TranslationNamespace } from "@patronage-web/shared";
import { ExternalQuestion, ParticipationQuestionType } from "@patronage-web/shared-data";
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

  const values = answers
    ? answers.map(answer => {
        return { [`${answer}`]: answer } as Record<string, string>;
      })
    : [{ "": "" }];

  const defaultAnswer = answers ? answers[0] : "";

  const answersField = {
    [ParticipationQuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "userAnswer",
        defaultValue: defaultAnswer,
        values,
        hideEditIcon: true
      }
    ],
    [ParticipationQuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "userAnswer",
        hideEditIcon: true,
        defaultValue: ""
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
          onSubmit={onSubmit}
          onChange={() => {}}
        />
      </Styled.QuestionFormCard>
      <Timer onTimeElapsed={onTimeElapsed} timeToElapse={timeToElapse} />
    </Styled.CurrentQuestionViewContainer>
  );
};
