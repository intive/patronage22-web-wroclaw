import { AppBarTypeMap, SxProps, ToolbarTypeMap } from "@mui/material";

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
