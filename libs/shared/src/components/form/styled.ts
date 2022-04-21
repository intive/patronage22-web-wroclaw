import { Box, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(60),
  width: "100%",

  "& .MuiFormControl-root": {
    margin: theme.spacing(1, 0),
    width: "100%"
  },

  "& #placeholder": {
    alignSelf: "center"
  }
}));

export const ButtonSetWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 1),

  "& .MuiButton-root": {
    margin: theme.spacing(1, 1)
  }
}));
