import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Form = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(60),

  "& > .MuiFormControl-root": {
    margin: theme.spacing(2)
  }
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  alignSelf: "flex-start",
  fontSize: "24px",
  margin: theme.spacing(2)
}));
