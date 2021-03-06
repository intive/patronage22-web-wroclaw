import { Form, FormFieldProps, FormFieldType, FormProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { string } from "yup";
import { ObjectShape } from "yup/lib/object";

export const FormStory: React.FC<FormProps> = ({ validationSchema, fields, onSubmit, onError, customButtons }) => (
  <Form validationSchema={validationSchema} fields={fields} onSubmit={onSubmit} onError={onError} customButtons={customButtons} />
);

const customButtons: FormProps["customButtons"] = { submit: { condition: true } };

const fields: FormFieldProps[] = [
  { type: FormFieldType.Text, name: "field1", variant: "filled" },
  { type: FormFieldType.Textarea, name: "field2", variant: "outlined" },
  { type: FormFieldType.Text, name: "email", variant: "standard", label: "E-mail" }
];

const validationSchema: ObjectShape = {
  field1: string().trim().required("Field required"),
  field2: string().trim(),
  email: string().trim().required("Field required").email("Provide valid e-mail")
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
    fields,
    customButtons
  },
  argTypes: {
    onSubmit: { type: "function", defaultValue: onSubmit },
    onError: { type: "function", defaultValue: onError }
  }
} as ComponentMeta<typeof FormStory>;
