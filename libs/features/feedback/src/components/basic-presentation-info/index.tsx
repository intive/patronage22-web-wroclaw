import { FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Styled.BasicPresentationInfo
      onSubmit={data => console.log(data)}
      onError={errors => console.log(errors)}
      showSubmitButton
      fields={[
        {
          fieldType: FormFieldType.Text,
          name: "title",
          isMultiline: false,
          variant: "standard",
          defaultValue: t("newPresentation")
        },
        {
          fieldType: FormFieldType.Textarea,
          name: "description",
          label: t("description")
        }
      ]}
      validationSchema={{
        title: string().trim().required(t("missingTitleError")),
        description: string()
      }}
    />
  );
};
