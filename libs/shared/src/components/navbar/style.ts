import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppNavbar = styled(AppBar)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "unset",
  borderBottom: `${theme.spacing(0.125)} solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.background.default,
  backgroundImage: "unset"
}));

export const NavbarToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignContent: "space-evenly",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: theme.spacing(192),
  margin: theme.spacing(1, 0)
}));

export const NavbarSectionContainer = styled(Box)({
  display: "flex"
});

export const NavbarSectionItem = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(0, 1),

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, 1.5)
  }
}));
