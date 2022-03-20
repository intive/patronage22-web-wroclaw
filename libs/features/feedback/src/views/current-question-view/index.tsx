import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { ExternalQuestion, QuestionType } from "@patronage-web/shared-data";
import { useState } from "react";

export interface CurrentQuestionViewProps {
  question: ExternalQuestion;
  onSubmit: () => void;
}

export const CurrentQuestionView: React.FC<CurrentQuestionViewProps> = ({ question, onSubmit }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id, number, title, type, answers, defaultAnswer } = question;

  const [usersAnswer, setUsersAnswer] = useState("");

  const options = answers?.map(answer => (
    <FormControlLabel value={answer} control={<Radio />} label={answer} key={answers.indexOf(answer)} />
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsersAnswer((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    onSubmit();
    console.log(usersAnswer);
  };

  const answersField = {
    [QuestionType.Closed]: (
      <RadioGroup value={usersAnswer} onChange={handleChange}>
        {options}
      </RadioGroup>
    ),
    [QuestionType.Open]: <TextField placeholder='Your answer' variant='standard' fullWidth onChange={handleChange} />
  };

  return (
    <FormControl>
      <FormLabel>
        <Typography>{number}</Typography>
        <Typography>{title}</Typography>
      </FormLabel>
      {answersField[type]}
      <Button onClick={handleSubmit} variant='contained' disabled={usersAnswer === ""}>
        Submit
      </Button>
    </FormControl>
  );
};
