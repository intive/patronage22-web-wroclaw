import { AppBarTypeMap, SxProps, ToolbarTypeMap } from "@mui/material";

export interface FooterSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum FooterSectionPosition {
  Start = "start",
  End = "end"
}

export interface FooterProps {
  color?: AppBarTypeMap["props"]["color"];
  config: Partial<Record<FooterSectionPosition, FooterSection>>;
  variant?: ToolbarTypeMap["props"]["variant"];
}
