import { Card, styled } from "@mui/material";

export const QuestionFormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: theme.spacing(76),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4)
}));
