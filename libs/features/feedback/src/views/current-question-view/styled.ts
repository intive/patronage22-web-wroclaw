import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const CurrentQuestionViewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(1, 2)
}));

export const QuestionFormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  maxWidth: "95%",

  [theme.breakpoints.up("md")]: {
    width: theme.spacing(60)
  }
}));

export const QuestionFormWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1, 3),
  display: "flex",
  flexDirection: "row"
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

export const QuestionForm = styled(Form)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3.5),
  width: "90%"
}));
