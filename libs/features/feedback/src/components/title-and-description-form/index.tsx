import { FieldTypes, Form, FormField, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

export const TitleAndDescription: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const formFields: FormField[] = [
    {
      fieldType: FieldTypes.FormTextField,
      variant: "standard",
      isMultiline: false,
      fieldName: "title",
      defaultValue: t("New presentation")
    },
    {
      fieldType: FieldTypes.FormTextField,
      fieldName: "description",
      isMultiline: true,
      defaultValue: t(" "),
      label: t("Description")
    }
  ];

  return (
    <Form
      onSubmit={data => console.log(data)}
      onError={() => console.log("Error")}
      isDisabled
      hasSubmitButton={false}
      formFields={formFields}
      validationSchema={{ title: string().required(t("Title is mandatory")), description: string() }}
      hasEditButton
    />
  );
};
