import { Delete } from "@mui/icons-material";
import { BaseButton, ButtonType, DynamicsInterface, FormFieldType, FormProps, TranslationNamespace } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";
import i18next from "i18next";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { QUESTION_CONFIG } from "../../configs";
import { QuestionData } from "../../views";
import * as Styled from "./styled";
import { updateTranslations } from "./update-translations";

export enum QuestionFormFieldNameType {
  Question = "question",
  Questions = "questions",
  QuestionsType = "questionsType",
  Answer = "answer"
}

const defaultAnswer: DynamicsInterface = {
  name: QuestionFormFieldNameType.Questions,
  addButtonText: i18next.t("question.addField"),
  maxAmount: QUESTION_CONFIG.maxAmountOfAnswers,
  fields: [
    {
      type: FormFieldType.Text,
      name: QuestionFormFieldNameType.Answer,
      variant: "filled",
      inputConfig: {
        disableUnderline: true
      },
      defaultValue: ""
    }
  ]
};

const QuestionTypeOptions = [
  { [i18next.t("question.questionTypeOpen")]: QuestionType.Open },
  { [i18next.t("question.questionTypeClosed")]: QuestionType.Closed }
];

const defaultQuestion: FormProps = {
  initialValues: { question: "", questionsType: QuestionType.Closed },
  fields: [
    {
      type: FormFieldType.Select,
      name: QuestionFormFieldNameType.QuestionsType,
      label: i18next.t("question.questionType"),
      values: QuestionTypeOptions
    },
    {
      type: FormFieldType.Text,
      name: QuestionFormFieldNameType.Question,
      description: i18next.t("question.questionField"),
      variant: "filled",
      inputConfig: {
        disableUnderline: true
      },
      dynamics: {
        name: QuestionFormFieldNameType.Questions,
        addButtonText: "",
        fields: [],
        maxAmount: 0
      }
    }
  ],
  validationSchema: {
    question: string()
      .trim()
      .required(i18next.t("question.missingQuestionError"))
      .max(QUESTION_CONFIG.maxLength, i18next.t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
      .ensure()
  }
};

export interface QuestionCardProps {
  id: string;
  updateQuestionList: Dispatch<SetStateAction<QuestionData[]>>;
  instance: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ id, updateQuestionList, instance }) => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);

  const [elements, setElements] = useState(defaultQuestion);
  const [isQuestionAsked, setIsQuestionAsked] = useState(false);

  i18n.on("languageChanged", () => updateTranslations(setElements, isQuestionAsked));

  const handleRemoveQuestion = () => {
    updateQuestionList(prevValues => prevValues.filter(item => item.id !== id));
  };

  const handleContinue = () => {
    setElements(prevElements => ({
      ...prevElements,
      fields: prevElements.fields.map(field =>
        field.name === QuestionFormFieldNameType.Question
          ? { ...field, variant: "standard", description: "", dynamics: defaultAnswer }
          : field
      )
    }));
    setIsQuestionAsked(true);
  };

  return (
    <Styled.QuestionCard>
      <Styled.NewQuestionFormWrapper>
        <Styled.QuestionNumberBox visible={isQuestionAsked}>{instance + 1}</Styled.QuestionNumberBox>
        <Styled.NewQuestionForm key={`question-form-${id}`} {...elements} id={id} />
        <Styled.DeleteQuestionBtnWrapper>
          <BaseButton key='remove-question-btn' type={ButtonType.Icon} onClick={handleRemoveQuestion} variant='contained'>
            <Delete />
          </BaseButton>
        </Styled.DeleteQuestionBtnWrapper>
      </Styled.NewQuestionFormWrapper>
      {!isQuestionAsked && (
        <>
          <Styled.FullWidthDivider />
          <Styled.QuestionCardBtnWrapper>
            <BaseButton key='continue-question-btn' type={ButtonType.Basic} onClick={handleContinue}>
              {t("continue")}
            </BaseButton>
          </Styled.QuestionCardBtnWrapper>
        </>
      )}
    </Styled.QuestionCard>
  );
};
