import { FormFieldType } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";

export const answerField = (questionType: QuestionType, answers?: string[]) => {
  const values = answers
    ? answers.map(answer => {
        return { [`${answer}`]: answer } as Record<string, string>;
      })
    : [{ "": "" }];

  const defaultAnswer = answers ? answers[0] : "";

  const formFieldProps = {
    [QuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "userAnswer",
        defaultValue: defaultAnswer,
        values,
        hideEditIcon: true
      }
    ],
    [QuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "userAnswer",
        hideEditIcon: true,
        defaultValue: ""
      }
    ]
  };

  return formFieldProps[questionType];
};
