import { FormFieldType } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";

const turnAnswersIntoRecords = (answers: string[]) => {
  return answers.map(answer => ({ [`${answer}`]: answer } as Record<string, string>));
};

export const getAnswerField = (type: QuestionType, answers?: string[]) => {
  const values = answers ? turnAnswersIntoRecords(answers) : [{ "": "" }];

  const defaultAnswer = answers ? answers[0] : "";

  const fields = {
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

  return fields[type];
};
