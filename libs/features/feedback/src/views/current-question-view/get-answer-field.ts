import { FormFieldType } from "@patronage-web/shared";
import { QuestionType } from "@patronage-web/shared-data";

const reduceAnswers = (answers: string[]) =>
  answers.reduce<Record<string, string>[]>((acc, answer) => {
    acc.push({ [`${answer}`]: answer });

    return acc;
  }, []);

const ANSWER_NAME = "userAnswer";

export const getAnswerField = (type: QuestionType, answers?: string[]) => {
  const values = answers ? reduceAnswers(answers) : [];

  const fields = {
    [QuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: ANSWER_NAME,
        values,
        hideEditIcon: true
      }
    ],
    [QuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: ANSWER_NAME,
        hideEditIcon: true
      }
    ]
  };

  return fields[type];
};
