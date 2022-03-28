import { Box, Card, styled } from "@mui/material";

export const CurrentQuestionViewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(0, 2)
}));

export const QuestionFormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: theme.spacing(76),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4)
}));
