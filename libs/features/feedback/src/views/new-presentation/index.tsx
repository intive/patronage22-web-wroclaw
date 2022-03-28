/* eslint-disable react/no-array-index-key */
import { Delete } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { BaseButton, ButtonType, FormFieldType, FormProps, TranslationNamespace } from "@patronage-web/shared";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DynamicsInterface } from "libs/shared/src/components/form/form-field";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormTextFieldVariant } from "libs/shared/src/components/form/form-field/render-field";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { BasicPresentationInfo } from "../../components";
import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";

export const NewPresentationView: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);

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
    initialValues: { question: "" },
    fields: [
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
          field.name === "question"
            ? {
                ...field,
                description: !isQuestionAsked[questionIndex] ? t("question.questionField") : field.description,
                dynamics:
                  isQuestionAsked[questionIndex] && field.dynamics?.name === "questions"
                    ? { ...field.dynamics, addButtonText: t("question.addField") }
                    : field.dynamics
              }
            : field
        )
      }))
    );
  });

  const handleNewQuestion = () => {
    // console.log(questions.length);
    if (questions.length < QUESTION_CONFIG.maxAmountOfQuestions) {
      setQuestions(prevQuestions => [...prevQuestions, defaultQuestion]);
      setIsQuestionAsked(prevValues => [...prevValues, false]);
    }
    if (questions.length + 1 === QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(true);
    }
  };

  const handleRemoveQuestion = (questionFormIndex: number) => {
    console.log(questions.length);
    console.log(questionFormIndex);
    setQuestions(prevValues => prevValues.filter((item, itemIndex) => itemIndex !== questionFormIndex));
    setIsQuestionAsked(isQuestionAsked.filter((item, itemIndex) => itemIndex !== questionFormIndex));
    if (questions.length - 1 !== QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(false);
    }
  };

  const handleContinue = (questionFormIndex: number) => {
    // console.log(questions.length);
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

  // TODO - replace with proper save question action when ready
  const handleSaveQuestion = (questionFormIndex: number) => {
    console.log("Saving question: ", questionFormIndex);
  };

  return (
    <Styled.NewPresentationWrapper>
      <BasicPresentationInfo />
      {questions.map((questionForm, questionFormIndex) => (
        <Styled.QuestionCard key={`question-card-${questionFormIndex}`}>
          <Styled.NewQuestionFormWrapper>
            {isQuestionAsked[questionFormIndex] && <Styled.QuestionNumberBox>{questionFormIndex + 1}</Styled.QuestionNumberBox>}
            <Styled.NewQuestionForm key={`question-form-${questionFormIndex}`} {...questionForm} />
          </Styled.NewQuestionFormWrapper>
          <Divider sx={{ width: "100%" }} />
          <Styled.QuestionCardBtnWrapper>
            {!isQuestionAsked[questionFormIndex] ? (
              <BaseButton key='continue-question-btn' type={ButtonType.Basic} onClick={() => handleContinue(questionFormIndex)}>
                {t("continue")}
              </BaseButton>
            ) : (
              <BaseButton key='save-question-btn' type={ButtonType.Basic} onClick={() => handleSaveQuestion(questionFormIndex)}>
                {t("saveQuestion")}
              </BaseButton>
            )}
            <BaseButton
              key='remove-question-btn'
              type={ButtonType.Icon}
              onClick={() => handleRemoveQuestion(questionFormIndex)}
              variant='contained'
            >
              <Delete />
            </BaseButton>
          </Styled.QuestionCardBtnWrapper>
        </Styled.QuestionCard>
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton
          key='add-question-btn'
          type={ButtonType.Basic}
          variant='contained'
          onClick={handleNewQuestion}
          disabled={isQuestionListFull}
        >
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
