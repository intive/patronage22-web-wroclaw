import { Box, Card, styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const QuestionCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  boxShadow: `0 3px .4em  ${theme.palette.primary.light}`,
  [theme.breakpoints.up("md")]: {
    width: theme.spacing(60)
  }
}));

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
