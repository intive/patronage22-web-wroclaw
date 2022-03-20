import { Card, styled } from "@mui/material";

export const FormCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  boxShadow: `0 3px .4em  ${theme.palette.primary.light}`,
  [theme.breakpoints.up("md")]: {
    width: theme.spacing(60)
  }
}));
