import { Delete } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { BaseButton, ButtonType, FormFieldType, FormProps, TranslationNamespace } from "@patronage-web/shared";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DynamicsInterface } from "libs/shared/src/components/form/form-field";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormTextFieldVariant } from "libs/shared/src/components/form/form-field/render-field";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { string } from "yup";

import { BasicPresentationInfo } from "../../components";
import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";

// TODO - replace with import from shared/data/feedback/types when
// "P2022-413 Praticipate in presentation" is ready
export enum QuestionType {
  Open = "open",
  Closed = "closed"
}

export const NewPresentationView: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);

  const QuestionTypeOptions = [
    { [t("question.questionTypeOpen")]: QuestionType.Open },
    { [t("question.questionTypeClosed")]: QuestionType.Closed }
  ];

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

  const defaultQuestion: FormProps = {
    id: uuidv4(),
    initialValues: { question: "", questionType: QuestionType.Closed },
    fields: [
      {
        type: FormFieldType.Select,
        name: "questionType",
        label: t("question.questionType"),
        values: QuestionTypeOptions
      },
      {
        type: FormFieldType.Text,
        name: "question",
        description: t("question.questionField"),
        variant: "filled",
        inputConfig: {
          disableUnderline: true
        },
        dynamics: {
          name: "questions",
          addButtonText: "",
          fields: [],
          maxAmount: 0
        }
      }
    ],
    validationSchema: {
      question: string()
        .trim()
        .required(t("question.missingQuestionError"))
        .max(QUESTION_CONFIG.maxLength, t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
    }
  };

  const [questions, setQuestions] = useState([defaultQuestion]);
  const [isQuestionAsked, setIsQuestionAsked] = useState([false]);
  const [isQuestionListFull, setIsQuestionListFull] = useState(false);
  const isLastQuestionAsked = isQuestionAsked[isQuestionAsked.length - 1];

  i18n.on("languageChanged", () => {
    setQuestions(prevValues =>
      prevValues.map((question, questionIndex) => ({
        ...question,
        validationSchema: {
          ...question.validationSchema,
          question: string()
            .trim()
            .required(t("question.missingQuestionError"))
            .max(QUESTION_CONFIG.maxLength, t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
        },
        fields: question.fields.map(field =>
          // eslint-disable-next-line no-nested-ternary
          field.name === "question"
            ? {
                ...field,
                description: !isQuestionAsked[questionIndex] ? t("question.questionField") : "",
                dynamics:
                  isQuestionAsked[questionIndex] && field.dynamics?.name === "questions"
                    ? { ...field.dynamics, addButtonText: t("question.addField") }
                    : field.dynamics
              }
            : field.name === "questionType"
            ? {
                ...field,
                label: t("question.questionType"),
                values: [
                  { [t("question.questionTypeOpen")]: QuestionType.Open },
                  { [t("question.questionTypeClosed")]: QuestionType.Closed }
                ]
              }
            : field
        )
      }))
    );
  });

  const handleNewQuestion = () => {
    if (questions.length < QUESTION_CONFIG.maxAmountOfQuestions) {
      setQuestions(prevQuestions => [...prevQuestions, { ...defaultQuestion, id: uuidv4() }]);
      setIsQuestionAsked(prevValues => [...prevValues, false]);
    }
    if (questions.length + 1 === QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(true);
    }
  };

  const handleRemoveQuestion = (questionFormIndex: number) => {
    setQuestions(prevValues => prevValues.filter((item, itemIndex) => itemIndex !== questionFormIndex));
    setIsQuestionAsked(isQuestionAsked.filter((item, itemIndex) => itemIndex !== questionFormIndex));
    if (questions.length - 1 !== QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(false);
    }
  };

  const handleContinue = (questionFormIndex: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((questionCard, questionCardIndex) =>
        questionCardIndex === questionFormIndex
          ? {
              ...questionCard,
              fields: questionCard.fields.map(field =>
                field.name === "question"
                  ? { ...field, variant: "standard" as FormTextFieldVariant, description: "", dynamics: defaultAnswer }
                  : field
              )
            }
          : questionCard
      )
    );
    setIsQuestionAsked(prevValues => prevValues.map((value, valueIndex) => (valueIndex === questionFormIndex ? true : value)));
  };

  return (
    <Styled.NewPresentationWrapper>
      <BasicPresentationInfo />
      {questions.map((questionForm, questionFormIndex) => (
        <Styled.QuestionCard key={`question-card-${questionForm.id}`}>
          <Styled.NewQuestionFormWrapper>
            <Styled.QuestionNumberBox visible={isQuestionAsked[questionFormIndex]}>
              {questionFormIndex + 1}
            </Styled.QuestionNumberBox>
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
              <Divider sx={{ width: "100%" }} />
              <Styled.QuestionCardBtnWrapper>
                <BaseButton key='continue-question-btn' type={ButtonType.Basic} onClick={() => handleContinue(questionFormIndex)}>
                  {t("continue")}
                </BaseButton>
              </Styled.QuestionCardBtnWrapper>
            </>
          )}
        </Styled.QuestionCard>
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton
          key='add-question-btn'
          type={ButtonType.Basic}
          variant='contained'
          onClick={handleNewQuestion}
          disabled={(isQuestionListFull || !isLastQuestionAsked) && questions.length > 0}
        >
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
