import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ParticipationQuestion, ParticipationQuestionType } from "../../../data/feedback/types";
import { BaseButton, ButtonType } from "../base-button";

export interface QuestionFormProps {
  data: ParticipationQuestion;
  onSubmit: (answer?: string) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  data: { defaultAnswer, type, questionNumber, title, answers },
  onSubmit
}) => {
  const { t } = useTranslation();

  const [answer, setAnswer] = useState(defaultAnswer);

  const avaliableAnswers = answers?.map(a => <FormControlLabel key={a} value={a} control={<Radio />} label={a} />);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setAnswer((event.target as HTMLInputElement).value);
  const TypeOfQuestion: Record<ParticipationQuestionType, JSX.Element> = {
    [ParticipationQuestionType.Open]: <TextField defaultValue={defaultAnswer} onChange={handleChange} label={t("yourAnswer")} />,
    [ParticipationQuestionType.Closed]: (
      <FormControl>
        <FormLabel>
          <Stack direction='row' alignItems='center'>
            <Box
              sx={{
                padding: 0.5,
                marginRight: 2,
                backgroundColor: "blue",
                borderRadius: 1
              }}
            >
              {questionNumber}
            </Box>
            {title}
          </Stack>
        </FormLabel>

        <RadioGroup name='participation-question-radio-group' defaultValue={defaultAnswer} onChange={handleChange}>
          {avaliableAnswers}
        </RadioGroup>
      </FormControl>
    )
  };

  return (
    <Stack>
      {TypeOfQuestion[type]}
      <BaseButton
        type={ButtonType.Basic}
        onClick={() => {
          onSubmit(answer);
        }}
        disabled={!answer}
      >
        {t("submitPoll")}
      </BaseButton>
    </Stack>
  );
};
