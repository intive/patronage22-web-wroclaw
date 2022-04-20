import { FormProps } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";
import i18next from "i18next";
import { Dispatch, SetStateAction } from "react";
import { string } from "yup";

import { QUESTION_CONFIG } from "../../configs";
import { QuestionFormFieldNameType } from "./index";

export const updateTranslations = (setElements: Dispatch<SetStateAction<FormProps>>, isQuestionAsked: boolean) => {
  setElements(prevElements => ({
    ...prevElements,
    validationSchema: {
      ...prevElements.validationSchema,
      question: string()
        .trim()
        .required(i18next.t("question.missingQuestionError"))
        .max(QUESTION_CONFIG.maxLength, i18next.t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
    },
    fields: prevElements.fields.map(field =>
      // eslint-disable-next-line no-nested-ternary
      field.name === QuestionFormFieldNameType.Question
        ? {
            ...field,
            description: !isQuestionAsked ? i18next.t("question.questionField") : "",
            dynamics:
              isQuestionAsked && field.dynamics?.name === QuestionFormFieldNameType.Questions
                ? { ...field.dynamics, addButtonText: i18next.t("question.addField") }
                : field.dynamics
          }
        : field.name === QuestionFormFieldNameType.QuestionsType
        ? {
            ...field,
            label: i18next.t("question.questionType"),
            values: [
              { [i18next.t("question.questionTypeOpen")]: QuestionType.Open },
              { [i18next.t("question.questionTypeClosed")]: QuestionType.Closed }
            ]
          }
        : field
    )
  }));
};
