import { Timer, TranslationNamespace } from "@patronage-web/shared";
import { ExternalQuestion } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";

import { answerField } from "./answer-field";
import * as Styled from "./styled";

export interface CurrentQuestionViewProps {
  number: number;
  question: ExternalQuestion;
  timeToElapse: number;
  onTimeElapsed: () => void;
  onSubmit: () => void;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({
  number,
  question: { content, type, answers },
  timeToElapse,
  onTimeElapsed,
  onSubmit
}) => {
  const { t } = useTranslation(TranslationNamespace.Common);

  return (
    <Styled.CurrentQuestionViewContainer>
      <Styled.QuestionFormCard>
        <Styled.QuestionFormWrapper>
          <Styled.QuestionNumberBox>{number}</Styled.QuestionNumberBox>
          <Styled.QuestionForm
            title={{ text: `${content}`, variant: "h5" }}
            validationSchema={{}}
            fields={answerField(type, answers)}
            customButtons={{ submit: { condition: true, text: t("submit") } }}
            onSubmit={onSubmit}
            onChange={() => {}}
          />
        </Styled.QuestionFormWrapper>
      </Styled.QuestionFormCard>
      <Timer onTimeElapsed={onTimeElapsed} timeToElapse={timeToElapse} />
    </Styled.CurrentQuestionViewContainer>
  );
};
