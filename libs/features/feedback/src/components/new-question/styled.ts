import { Box, styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const NewQuestionFormWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1, 8, 1, 4)
}));

export const NewQuestionForm = styled(Form)(({ theme }) => ({
  width: "100%",

  "& .MuiFormControl-root": {
    marginTop: theme.spacing(0.3)
  },

  "& .MuiFilledInput-root": {
    borderRadius: theme.shape.borderRadius
  },

  "& .MuiFilledInput-input": {
    padding: theme.spacing(1, 1.5)
  }
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  padding: theme.spacing(1, 4)
}));
