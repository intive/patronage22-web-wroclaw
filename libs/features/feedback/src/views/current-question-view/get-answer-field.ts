import { FormFieldType } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";

const reduceAnswers = (answers: string[]) => {
  return answers.reduce<Record<string, string>[]>((acc, answer) => {
    acc.push({ [`${answer}`]: answer });

    return acc;
  }, []);
};

export const getAnswerField = (type: QuestionType, answers?: string[]) => {
  const values = answers ? reduceAnswers(answers) : [];

  const fields = {
    [QuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "userAnswer",
        values,
        hideEditIcon: true
      }
    ],
    [QuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "userAnswer",
        hideEditIcon: true
      }
    ]
  };

  return fields[type];
};
