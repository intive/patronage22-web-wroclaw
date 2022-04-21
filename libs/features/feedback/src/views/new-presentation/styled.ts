import { Box, styled } from "@mui/material";

export const NewPresentationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 2),
  overflowX: "hidden",
  overflowY: "auto"
}));

export const NewQuestionBtnWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  width: "50%",

  [theme.breakpoints.down("sm")]: {
    width: "80%"
  }
}));

export const TitleAndButtonsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column"
  }
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-end",
    order: -1
  }
}));
