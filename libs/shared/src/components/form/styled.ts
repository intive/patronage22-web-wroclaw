import { Box, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(50),

  "& .MuiFormControl-root": {
    margin: theme.spacing(1, 0)
  },

  "& #placeholder": {
    alignSelf: "center"
  }
}));

export const ButtonSetWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  "& .MuiButton-root": {
    margin: theme.spacing(0, 1)
  }
}));
