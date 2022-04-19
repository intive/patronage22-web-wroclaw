import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(0, 2)
}));

export const LoginTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(1)
}));

export const LoginSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(0.5)
}));

export const LoginFormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: theme.spacing(76),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4)
}));

export const LoginForm = styled(Form)(({ theme }) => ({
  width: "100%",
  margin: 0,

  "& .MuiFormControl-root": {
    margin: 0,
    flexGrow: 1,

    "& input": {
      padding: theme.spacing(1, 1.5)
    }
  },

  "& .MuiTypography-root:nth-of-type(2)": {
    marginTop: theme.spacing(3)
  },

  "& .MuiFilledInput-root": {
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1)
  },

  "& a": {
    display: "inline-block",
    color: theme.palette.info.main,
    marginBottom: theme.spacing(3)
  }
}));

export const LoginButtonBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(50),
  marginTop: theme.spacing(3)
}));
