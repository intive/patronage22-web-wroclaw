import { Box, styled } from "@mui/material";

export const NewPresentationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  marginTop: theme.spacing(13),
  padding: theme.spacing(0, 2)
}));

export const NewQuestionBtnWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2)
}));
