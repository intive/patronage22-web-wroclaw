import { AppBar as MUIAppBar, Toolbar as MUIToolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppBar = styled(MUIAppBar)({
  flexDirection: "column",
  bottom: "0",
  top: "auto",
  alignItems: "center",
  justifyContent: "center"
});

export const Toolbar = styled(MUIToolbar)(({ theme }) => ({
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

export const SectionContainer = styled("div")({
  display: "flex"
});

export const SectionItem = styled("div")(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(0, 1),

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, 1.5)
  }
}));
