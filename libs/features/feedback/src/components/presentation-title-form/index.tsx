import { Form, FormFieldType } from "@patronage-web/shared";
import { t } from "i18next";
import { string } from "yup";

export const PresentationTitleForm: React.FC = () => (
  <Form
    fields={[
      {
        type: FormFieldType.Text,
        name: "title",
        variant: "standard",
        placeholder: t("presentation.new")
      }
    ]}
    validationSchema={{
      title: string().trim().required(t("missingTitleError")).default(t("presentation.new"))
    }}
  />
);
