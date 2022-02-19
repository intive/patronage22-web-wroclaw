import { FieldTypes, FormField, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const TitleAndDescription: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const formFields: FormField[] = [
    {
      fieldType: FieldTypes.FormTextField,
      variant: "standard",
      isMultiline: false,
      fieldName: "title",
      defaultValue: t("newPresentation")
    },
    {
      fieldType: FieldTypes.FormTextField,
      fieldName: "description",
      isMultiline: true,
      defaultValue: t(" "),
      label: t("description")
    }
  ];

  return (
    <Styled.TitleAndDescription
      onSubmit={data => console.log(data)}
      onError={formState => console.log(formState.errors)}
      isDisabled
      hasSubmitButton={false}
      formFields={formFields}
      validationSchema={{ title: string().required(t("missingTitleError")), description: string() }}
      hasEditButton
    />
  );
};
