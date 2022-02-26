import { FieldTypes, Form, FormFieldType, FormProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { t } from "i18next";
import { string } from "yup";
import { ObjectShape } from "yup/lib/object";

export const FormStory: React.FC<FormProps> = ({
  title,
  validationSchema,
  fields,
  onSubmit,
  onError,
  showSubmitButton
}: FormProps) => (
  <Form
    title={title}
    validationSchema={validationSchema}
    fields={fields}
    onSubmit={onSubmit}
    onError={onError}
    showSubmitButton={showSubmitButton}
  />
);

const fields: FormFieldType[] = [
  { fieldType: FieldTypes.Text, name: "field1", variant: "filled" },
  { fieldType: FieldTypes.Textarea, name: "field2", variant: "outlined" }
];

const validationSchema: ObjectShape = { field1: string().trim().required("Field required"), field2: string().trim() };

const onSubmit = (): void => {
  console.log("submit");
};

const onError = (): void => {
  console.log("submit");
};

export default {
  title: "Form",
  component: FormStory,
  args: {
    title: t("title"),
    validationSchema,
    fields
  },
  argTypes: {
    onSubmit: { type: "function", defaultValue: onSubmit },
    onError: { type: "function", defaultValue: onError },
    showSubmitButton: { type: "boolean", defaultValue: true }
  }
} as ComponentMeta<typeof FormStory>;
