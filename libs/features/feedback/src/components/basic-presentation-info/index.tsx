import { FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import React from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Styled.BasicPresentationInfo
      fields={[
        {
          type: FormFieldType.Text,
          name: "title",
          variant: "standard",
          placeholder: t("newPresentation")
        },
        {
          type: FormFieldType.Textarea,
          name: "description",
          variant: "standard",
          placeholder: t("description"),
          rows: 2,
          inputConfig: { disableUnderline: true }
        }
      ]}
      validationSchema={{
        title: string().trim().required(t("missingTitleError")),
        description: string()
      }}
    />
  );
};
