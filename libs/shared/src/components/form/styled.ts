import { styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(50),

  "& .MuiFormControl-root": {
    margin: theme.spacing(1, 0)
  }
}));
