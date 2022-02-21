import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";

import { ParticipationQuestion } from "../../../data/feedback/types/participation-question";
import { ParticipationQuestionType } from "../../../data/feedback/types/participation-question-type";
import { BaseButton, ButtonType } from "../base-button";

export interface QuestionFormProps {
  participationQuestion: ParticipationQuestion;
  submitHandle: (providedAnswer: string) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ participationQuestion, submitHandle }) => {
  const [providedAnswer, setProvidedAnswer] = useState<string>("");
  return (
    <Stack>
      {participationQuestion.type === ParticipationQuestionType.Open ? (
        <TextField onChange={e => setProvidedAnswer((e.target as HTMLInputElement).value)} label='Your answer' />
      ) : (
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
                {participationQuestion.questionNumber}
              </Box>
              {participationQuestion.title}
            </Stack>
          </FormLabel>
          <RadioGroup
            name='participation-question-radio-group'
            onChange={e => setProvidedAnswer((e.target as HTMLInputElement).value)}
          >
            {participationQuestion.answers?.map(answer => (
              <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
            ))}
          </RadioGroup>
        </FormControl>
      )}
      <BaseButton
        type={ButtonType.Basic}
        onClick={() => {
          submitHandle(providedAnswer);
        }}
        disabled={!providedAnswer}
      >
        Submit poll
      </BaseButton>
    </Stack>
  );
};
