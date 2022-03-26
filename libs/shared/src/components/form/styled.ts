import { Box, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(60),
  width: "100%",

  "& .MuiFormControl-root": {
    margin: theme.spacing(1, 0)
  },

  "& #placeholder": {
    alignSelf: "center"
  }
}));

export const ButtonSetWrapper = styled(Box)(({ theme }) => ({
  "& .MuiButton-root": {
    margin: theme.spacing(0, 1)
  }
}));
