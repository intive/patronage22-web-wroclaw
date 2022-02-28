import { FieldTypes, Form, FormFieldType, FormProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { string } from "yup";
import { ObjectShape } from "yup/lib/object";

export const FormStory: React.FC<FormProps> = ({ validationSchema, fields, onSubmit, onError, showSubmitButton }: FormProps) => (
  <Form
    validationSchema={validationSchema}
    fields={fields}
    onSubmit={onSubmit}
    onError={onError}
    showSubmitButton={showSubmitButton}
  />
);

const fields: FormFieldType[] = [
  { fieldType: FieldTypes.Text, name: "field1", variant: "filled" },
  { fieldType: FieldTypes.Textarea, name: "field2", variant: "outlined" },
  { fieldType: FieldTypes.Text, name: "e-mail", variant: "standard", label: "E-mail" }
];

const validationSchema: ObjectShape = {
  field1: string().trim().required("Field required"),
  field2: string().trim(),
  field3: string().trim().email("Provide valid e-mail").required("Field required")
};

const onSubmit = (): void => {
  console.log("submit");
};

const onError = (): void => {
  console.log("error");
};

export default {
  title: "Form",
  component: FormStory,
  args: {
    validationSchema,
    fields
  },
  argTypes: {
    onSubmit: { type: "function", defaultValue: onSubmit },
    onError: { type: "function", defaultValue: onError },
    showSubmitButton: { type: "boolean", defaultValue: true }
  }
} as ComponentMeta<typeof FormStory>;
