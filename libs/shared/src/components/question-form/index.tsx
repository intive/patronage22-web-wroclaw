import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ParticipationQuestion, ParticipationQuestionType } from "../../../data/feedback/types";
import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";

export interface QuestionFormProps {
  data: ParticipationQuestion;
  onSubmit: (answer?: string) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  data: { defaultAnswer, type, number: questionNumber, title, answers },
  onSubmit
}) => {
  const { t } = useTranslation(TranslationNamespace.Shared);

  const [currentAnswer, setCurrentAnswer] = useState(defaultAnswer);

  const availableAnswers = answers?.map(answer => (
    <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
  ));

  type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChange = (event: ChangeEvent) => setCurrentAnswer(event.target.value);

  const handleSubmit = () => {
    onSubmit(currentAnswer);
  };

  const questionFields: Record<ParticipationQuestionType, JSX.Element> = {
    [ParticipationQuestionType.Open]: (
      <TextField defaultValue={defaultAnswer} onChange={handleChange} label={t("questionAnswerTitle")} />
    ),
    [ParticipationQuestionType.Closed]: (
      <FormControl>
        <FormLabel>
          <Stack direction='row' alignItems='center'>
            <Box
              sx={{
                padding: 0.5,
                borderRadius: 1
              }}
            >
              {questionNumber}
            </Box>
            {title}
          </Stack>
        </FormLabel>

        <RadioGroup name='participation-question-radio-group' defaultValue={defaultAnswer} onChange={handleChange}>
          {availableAnswers}
        </RadioGroup>
      </FormControl>
    )
  };

  return (
    <Stack>
      {questionFields[type]}
      <BaseButton type={ButtonType.Basic} onClick={handleSubmit} disabled={!currentAnswer}>
        {t("submitPoll")}
      </BaseButton>
    </Stack>
  );
};
