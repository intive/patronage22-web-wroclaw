import { Box, Card, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const QuestionCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[5],

  [theme.breakpoints.up("md")]: {
    width: theme.spacing(60)
  }
}));

export const NewQuestionFormWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1, 4),
  display: "flex"
}));

export const QuestionNumberBox = styled(Box)<{ visible: boolean }>(({ theme, visible }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.background.default,
  marginTop: theme.spacing(8.5),
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(3.5),
  width: theme.spacing(3.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  visibility: visible ? "visible" : "hidden"
}));

export const NewQuestionForm = styled(Form)(({ theme }) => ({
  width: "80%",

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

export const DeleteQuestionBtnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  height: theme.spacing(3.5),
  width: theme.spacing(3.5)
}));

export const FullWidthDivider = styled(Divider)({
  width: "100%"
});

export const QuestionCardBtnWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1, 4)
}));
