import { Timer } from "@patronage-web/shared";
import { ExternalQuestion } from "@patronage-web/shared-data";
import { useState } from "react";

import { getAnswerField } from "./get-answer-field";
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
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

  const handleChange = () => setIsSubmitBtnDisabled(prev => (prev ? false : prev));

  return (
    <Styled.CurrentQuestionViewContainer>
      <Styled.QuestionFormCard>
        <Styled.QuestionFormWrapper>
          <Styled.QuestionNumberBox>{number}</Styled.QuestionNumberBox>
          <Styled.QuestionForm
            title={{ text: `${content}`, variant: "h5" }}
            validationSchema={{}}
            fields={getAnswerField(type, answers)}
            customButtons={{ submit: { condition: true, disabled: isSubmitBtnDisabled } }}
            onSubmit={onSubmit}
            onChange={handleChange}
          />
        </Styled.QuestionFormWrapper>
      </Styled.QuestionFormCard>
      <Timer onTimeElapsed={onTimeElapsed} timeToElapse={timeToElapse} />
    </Styled.CurrentQuestionViewContainer>
  );
};
