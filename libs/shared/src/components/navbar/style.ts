import { AppBar, AppBarTypeMap, Box, Toolbar, ToolbarTypeMap } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";

export interface NavbarSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum NavbarSectionPosition {
  Start = "start",
  Center = "center",
  End = "end"
}

export interface NavbarProps {
  color?: AppBarTypeMap["props"]["color"];
  config: Partial<Record<NavbarSectionPosition, NavbarSection>>;
  variant?: ToolbarTypeMap["props"]["variant"];
}
export const NavbarAppBar = styled(AppBar)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
});

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
