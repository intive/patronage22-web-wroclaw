import { Box, Card, styled, Typography } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const LoginGoogleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(0, 2)
}));

export const LoginGoogleTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(1)
}));

export const LoginGoogleSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(0.5)
}));

export const LoginGoogleFormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: theme.spacing(76),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4)
}));

export const LoginGoogleForm = styled(Form)(({ theme }) => ({
  width: "100%",
  margin: 0,

  "& .MuiFormControl-root": {
    margin: 0,
    flexGrow: 1,
    maxWidth: "90%",

    "& input": {
      padding: theme.spacing(1, 1.5)
    }
  },

  "& .MuiTypography-root:nth-of-type(2)": {
    marginTop: theme.spacing(3)
  },

  "& a": {
    display: "inline-block",
    color: theme.palette.info.main,
    marginBottom: theme.spacing(3)
  },

  "& button": {
    maxWidth: "90%"
  }
}));
