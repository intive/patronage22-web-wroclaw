import { Form, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { number, string } from "yup";

import { QUESTION_CONFIG } from "../../configs";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Form
      fields={[
        {
          type: FormFieldType.Textarea,
          name: "description",
          variant: "standard",
          placeholder: t("description"),
          rows: 2,
          inputConfig: { disableUnderline: true }
        },
        {
          type: FormFieldType.Text,
          name: "time",
          variant: "standard",
          label: t("setQuestionTime"),
          inputConfig: {
            type: "number",
            defaultValue: QUESTION_CONFIG.defaultTime
          }
        }
      ]}
      validationSchema={{
        description: string(),
        time: number().positive(t("question.negativeTimeError")).default(QUESTION_CONFIG.defaultTime)
      }}
    />
  );
};
