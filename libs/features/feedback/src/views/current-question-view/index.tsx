import { Form, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { ExternalQuestion, QuestionType } from "@patronage-web/shared-data";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface CurrentQuestionViewProps {
  question: ExternalQuestion;
  onSubmit: () => void;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({ question, onSubmit }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id, number, title, type, answers, defaultAnswer } = question;

  const { t } = useTranslation(TranslationNamespace.Common);

  const [usersAnswer, setUsersAnswer] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsersAnswer((event.target as HTMLInputElement).value);
  };
  const validationSchema = {};
  const handleSubmit = () => {
    onSubmit();
    console.log(usersAnswer);
  };

  const answersField = {
    [QuestionType.Closed]: [
      {
        type: FormFieldType.RadioGroup,
        name: "posibleAnswers",
        options: answers,
        onChange: handleChange,
        value: usersAnswer,
        hideEditIcon: true
      }
    ],
    [QuestionType.Open]: [
      {
        type: FormFieldType.Textarea,
        name: "usersAnswer",
        onChange: handleChange,
        hideEditIcon: true
      }
    ]
  };

  // const fields = [
  //   {
  //     type: FormFieldType.RadioGroup,
  //     name: "posibleAnswers",
  //     options: answers,
  //     onChange: handleChange,
  //     value: usersAnswer,
  //     hideEditIcon: true
  //   }
  // ];

  return (
    <Styled.QuestionFormCard>
      <Form
        title={`${number} ${title}`}
        validationSchema={validationSchema}
        fields={answersField[type]}
        customButtons={{ submit: { condition: true, text: t("submit") } }}
        onSubmit={handleSubmit}
        key={`questionview${id}`}
      />
    </Styled.QuestionFormCard>
  );

  // const [usersAnswer, setUsersAnswer] = useState("");

  // const options = answers?.map(answer => (
  //   <FormControlLabel value={answer} control={<Radio />} label={answer} key={answers.indexOf(answer)} />
  // ));

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsersAnswer((event.target as HTMLInputElement).value);
  // };

  // const handleSubmit = () => {
  //   onSubmit();
  //   console.log(usersAnswer);
  // };

  // const answersField = {
  //   [QuestionType.Closed]: (
  //     <RadioGroup value={usersAnswer} onChange={handleChange}>
  //       {options}
  //     </RadioGroup>
  //   ),
  //   [QuestionType.Open]: <TextField placeholder='Your answer' variant='standard' fullWidth onChange={handleChange} />
  // };

  // return (
  //   <FormControl>
  //     <FormLabel>
  //       <Typography>{number}</Typography>
  //       <Typography>{title}</Typography>
  //     </FormLabel>
  //     {answersField[type]}
  //     <Button onClick={handleSubmit} variant='contained' disabled={usersAnswer === ""}>
  //       Submit
  //     </Button>
  //   </FormControl>
  // );
};
