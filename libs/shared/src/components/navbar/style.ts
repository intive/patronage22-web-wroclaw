import { AppBar as MUIAppBar, Toolbar as MUIToolbar } from "@mui/material";
import { styled } from "@mui/system";

export const AppBar = styled(MUIAppBar)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
});

export const Toolbar = styled(MUIToolbar)({
  display: "flex",
  alignItems: "center",
  alignContent: "space-evenly",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1536px",
  margin: "5px 0"
});

export const SectionContainer = styled("div")({
  display: "flex"
});

export const SectionItem = styled("div")({
  width: "100%",
  margin: "0 7px",

  // TODO when theme config will be applied - replace with theme breakpoints
  "@media (min-width: 900px)": {
    margin: "0 12px"
  }
});
