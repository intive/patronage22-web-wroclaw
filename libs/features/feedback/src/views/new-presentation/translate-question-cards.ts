import { FormProps } from "@patronage-web/shared";
import i18next from "i18next";
import { string } from "yup";

import { QUESTION_CONFIG } from "../../configs";
import { QuestionType } from ".";

export const translateQuestionCards = (
  setQuestions: React.Dispatch<React.SetStateAction<FormProps[]>>,
  isQuestionAsked: boolean[]
) => {
  setQuestions(prevValues =>
    prevValues.map((question, questionIndex) => ({
      ...question,
      validationSchema: {
        ...question.validationSchema,
        question: string()
          .trim()
          .required(i18next.t("question.missingQuestionError"))
          .max(QUESTION_CONFIG.maxLength, i18next.t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
      },
      fields: question.fields.map(field =>
        // eslint-disable-next-line no-nested-ternary
        field.name === "question"
          ? {
              ...field,
              description: !isQuestionAsked[questionIndex] ? i18next.t("question.questionField") : "",
              dynamics:
                isQuestionAsked[questionIndex] && field.dynamics?.name === "questions"
                  ? { ...field.dynamics, addButtonText: i18next.t("question.addField") }
                  : field.dynamics
            }
          : field.name === "questionType"
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
    }))
  );
};
