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
import * as Styled from "./styled";

export const NewPresentationView: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);
  const QUESTION_CONFIG = Object.freeze({
    maxLength: 200
  });

  const defaultAnswer: DynamicsInterface = {
    name: "questions",
    addButtonText: t("question.addField"),
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
          fields: []
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
  const [showContinueBtn, setShowContinueBtn] = useState([true]);

  // i18n.on("languageChanged", () => {
  //   setQuestions(questions);
  //   console.log(questions);
  // });

  const handleNewQuestion = () => {
    setQuestions(prevQuestions => [...prevQuestions, defaultQuestion]);
    setShowContinueBtn(prevValues => [...prevValues, true]);
  };

  const handleContinue = (questionFormIndex: number) => {
    const newQuestionArray = questions.map((questionCard, questionCardIndex) =>
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
    );
    setQuestions(newQuestionArray);
    setShowContinueBtn(prevValues => prevValues.map((value, valueIndex) => (valueIndex === questionFormIndex ? false : value)));
  };

  // TODO - replace with proper save question action when ready
  const handleSaveQuestion = (questionFormIndex: number) => {
    console.log("Saving question: ", questionFormIndex);
  };

  return (
    <Styled.NewPresentationWrapper>
      <BasicPresentationInfo />
      {questions.map((questionForm, questionFormIndex) => (
        <Styled.QuestionCard key={questionFormIndex}>
          <Styled.NewQuestionFormWrapper>
            <Styled.NewQuestionForm key={`question-form-${questionFormIndex}`} {...questionForm} />
          </Styled.NewQuestionFormWrapper>
          <Divider sx={{ width: "100%" }} />
          <Styled.QuestionCardBtnWrapper>
            {showContinueBtn[questionFormIndex] ? (
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
              onClick={() => setQuestions(questions.filter((item, itemIndex) => itemIndex !== questionFormIndex))}
              variant='contained'
            >
              <Delete />
            </BaseButton>
          </Styled.QuestionCardBtnWrapper>
        </Styled.QuestionCard>
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton key='add-question-btn' type={ButtonType.Basic} variant='contained' onClick={handleNewQuestion}>
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
