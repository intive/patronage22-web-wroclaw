import { FieldTypes, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const TitleAndDescription: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const formFields: FormFieldType[] = [
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
    <Styled.TitleAndDescription
      onSubmit={data => console.log(data)}
      onError={formState => console.log(formState.errors)}
      hasSubmitButton={false}
      fields={formFields}
      validationSchema={{ title: string().required(t("missingTitleError")), description: string() }}
    />
  );
};
