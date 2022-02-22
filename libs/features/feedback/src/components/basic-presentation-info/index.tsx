import { FieldTypes, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const fields: FormFieldType[] = [
    {
      fieldType: FieldTypes.FormTextField,
      variant: "standard",
      isMultiline: false,
      name: "title",
      defaultValue: t("newPresentation"),
      hasEditIcon: true
    },
    {
      fieldType: FieldTypes.FormTextField,
      name: "description",
      isMultiline: true,
      defaultValue: t(" "),
      label: t("description"),
      hasEditIcon: true
    }
  ];

  return (
    <Styled.BasicPresentationInfo
      onSubmit={data => console.log(data)}
      onError={errors => console.log(errors)}
      hasSubmitButton={false}
      fields={fields}
      validationSchema={{ title: string().trim().required(t("missingTitleError")), description: string() }}
    />
  );
};
