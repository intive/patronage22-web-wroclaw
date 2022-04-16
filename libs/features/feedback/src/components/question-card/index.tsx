import { Delete } from "@mui/icons-material";
import { BaseButton, ButtonType, DynamicsInterface, FormFieldType, FormProps, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";

export interface QuestionCardProps {
  questionForm: FormProps;
  questionFormIndex: number;
  questions: FormProps[];
  setQuestions: React.Dispatch<React.SetStateAction<FormProps[]>>;
  isQuestionAsked: boolean[];
  setIsQuestionAsked: React.Dispatch<React.SetStateAction<boolean[]>>;
  setIsQuestionListFull: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionForm,
  questionFormIndex,
  questions,
  setQuestions,
  isQuestionAsked,
  setIsQuestionAsked,
  setIsQuestionListFull
}) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const defaultAnswer: DynamicsInterface = {
    name: "questions",
    addButtonText: t("question.addField"),
    maxAmount: QUESTION_CONFIG.maxAmountOfAnswers,
    fields: [
      {
        type: FormFieldType.Text,
        name: "answer",
        variant: "filled",
        inputConfig: {
          disableUnderline: true
        }
      }
    ]
  };

  const handleRemoveQuestion = (formIndex: number) => {
    setQuestions(prevValues => prevValues.filter((item, itemIndex) => itemIndex !== formIndex));
    setIsQuestionAsked(isQuestionAsked.filter((item, itemIndex) => itemIndex !== formIndex));
    if (questions.length - 1 !== QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(false);
    }
  };

  const handleContinue = (formIndex: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((questionCard, questionCardIndex) =>
        questionCardIndex === formIndex
          ? {
              ...questionCard,
              fields: questionCard.fields.map(field =>
                field.name === "question" ? { ...field, variant: "standard", description: "", dynamics: defaultAnswer } : field
              )
            }
          : questionCard
      )
    );
    setIsQuestionAsked(prevValues => prevValues.map((value, valueIndex) => (valueIndex === formIndex ? true : value)));
  };

  return (
    <Styled.QuestionCard>
      <Styled.NewQuestionFormWrapper>
        <Styled.QuestionNumberBox visible={isQuestionAsked[questionFormIndex]}>{questionFormIndex + 1}</Styled.QuestionNumberBox>
        <Styled.NewQuestionForm key={`question-form-${questionForm.id}`} {...questionForm} />
        <Styled.DeleteQuestionBtnWrapper>
          <BaseButton
            key='remove-question-btn'
            type={ButtonType.Icon}
            onClick={() => handleRemoveQuestion(questionFormIndex)}
            variant='contained'
          >
            <Delete />
          </BaseButton>
        </Styled.DeleteQuestionBtnWrapper>
      </Styled.NewQuestionFormWrapper>
      {!isQuestionAsked[questionFormIndex] && (
        <>
          <Styled.FullWidthDivider />
          <Styled.QuestionCardBtnWrapper>
            <BaseButton key='continue-question-btn' type={ButtonType.Basic} onClick={() => handleContinue(questionFormIndex)}>
              {t("continue")}
            </BaseButton>
          </Styled.QuestionCardBtnWrapper>
        </>
      )}
    </Styled.QuestionCard>
  );
};
