import { ButtonType, FormFieldType } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const NewQuestion: React.FC = () => {
  const { t } = useTranslation();
  const QUESTION_CONFIG = Object.freeze({
    maxLength: 200
  });

  return (
    <Styled.NewQuestionFormWrapper>
      <Styled.NewQuestionForm
        fieldset={[
          {
            type: FormFieldType.Text,
            name: "question",
            variant: "filled",
            description: t("question.questionField"),
            inputConfig: {
              disableUnderline: true
            }
          }
        ]}
        basicButtons={{
          addField: {
            condition: true,
            text: t("continue"),
            type: ButtonType.Basic,
            variant: "text",
            fieldType: "answerField"
          }
        }}
        validationSchema={{
          question: string()
            .trim()
            .required(t("question.missingQuestionError"))
            .max(QUESTION_CONFIG.maxLength, t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
        }}
      />
    </Styled.NewQuestionFormWrapper>
  );
};
