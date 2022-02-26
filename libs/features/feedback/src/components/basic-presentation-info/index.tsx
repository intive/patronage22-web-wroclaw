import { FieldTypes, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const fields: FormFieldType[] = [
    {
      fieldType: FieldTypes.Text,
      name: "title",
      isMultiline: false,
      variant: "standard",
      defaultValue: t("newPresentation"),
      helperText: "helper"
    },
    {
      fieldType: FieldTypes.Textarea,
      name: "description",
      label: t("description")
    }
  ];

  return (
    <Styled.BasicPresentationInfo
      onSubmit={data => console.log(data)}
      onError={errors => console.log(errors)}
      showSubmitButton={false}
      fields={fields}
      validationSchema={{ title: string().trim().required(t("missingTitleError")), description: string() }}
    />
  );
};
