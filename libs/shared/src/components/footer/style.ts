import { AppBar, AppBarProps, Box, Toolbar } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";

export interface FooterSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum FooterSectionPosition {
  Start = "start",
  End = "end"
}

export interface FooterProps extends Pick<AppBarProps, "color"> {
  config: Partial<Record<FooterSectionPosition, FooterSection>>;
}

export const FooterAppBar = styled(AppBar)({
  flexDirection: "column",
  bottom: 0,
  top: "auto",
  alignItems: "center",
  justifyContent: "center"
});

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
