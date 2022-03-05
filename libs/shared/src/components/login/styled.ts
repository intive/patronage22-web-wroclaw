import { Box, Card, styled, Typography } from "@mui/material";

import { Form } from "../form";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(0, 2)
}));

export const Title = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(1)
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(0.5)
}));

export const BasicCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: theme.spacing(76),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4)
}));

export const Login = styled(Form)(({ theme }) => ({
  width: "100%",
  margin: 0,

  "& .MuiFormControl-root": {
    margin: theme.spacing(0)
  },

  "& .MuiTypography-root:nth-of-type(2)": {
    marginTop: theme.spacing(3)
  },

  "& a": {
    display: "inline-block",
    color: theme.palette.info.main,
    marginBottom: theme.spacing(3)
  }
}));
