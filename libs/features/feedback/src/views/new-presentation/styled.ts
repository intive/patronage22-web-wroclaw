import { Box, Card, styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const NewPresentationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  marginTop: theme.spacing(13),
  padding: theme.spacing(0, 2)
}));

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
  padding: theme.spacing(1, 4),
  display: "flex"
}));

export const QuestionNumberBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.background.default,
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(3.5),
  width: theme.spacing(3.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const NewQuestionForm = styled(Form)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  width: "90%",

  "& .MuiFormControl-root": {
    marginTop: theme.spacing(0.3),
    width: "100%"
  },

  "& .MuiFilledInput-root": {
    borderRadius: theme.shape.borderRadius
  },

  "& .MuiFilledInput-input": {
    padding: theme.spacing(1, 1.5)
  }
}));

export const QuestionCardBtnWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1, 4)
}));

export const NewQuestionBtnWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2)
}));
