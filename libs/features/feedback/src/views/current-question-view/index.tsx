import { Form, FormFieldProps, FormFieldType } from "@patronage-web/shared";
import { ExternalQuestion } from "@patronage-web/shared-data";

export interface CurrentQuestionViewProps {
  question: ExternalQuestion;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({ question }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id, number, title, type, answers, defaultAnswer } = question;
  const validationSchema = {};
  const fields: FormFieldProps[] = [
    { type: FormFieldType.Text, name: "field1", variant: "filled" },
    { type: FormFieldType.Textarea, name: "field2", variant: "outlined" }
  ];
  const handleSubmit = () => {};

  return (
    <Form
      title={title}
      validationSchema={validationSchema}
      fields={fields}
      onSubmit={handleSubmit}
      showSubmitButton
      submitButtonText='Submit'
    />
  );
};
