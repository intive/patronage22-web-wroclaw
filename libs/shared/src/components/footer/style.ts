import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterAppBar = styled(AppBar)(({ theme }) => ({
  flexDirection: "column",
  bottom: 0,
  top: "auto",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "unset",
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.grey[300]}`,
  backgroundImage: "unset"
}));

export const FooterToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignContent: "space-evenly",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: theme.spacing(192),
  margin: theme.spacing(1, 0),
  marginTop: "auto"
}));

export const FooterSectionContainer = styled(Box)({
  display: "flex"
});

export const FooterSectionItem = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(0, 1),

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, 1.5)
  }
}));
