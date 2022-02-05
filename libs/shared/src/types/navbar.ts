import { AppBarTypeMap, ToolbarTypeMap } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/material/node_modules/@mui/system";

export interface NavbarSection {
  customStyles?: MUIStyledCommonProps["sx"];
  elements: JSX.Element[];
}

export interface NavbarProps {
  color?: AppBarTypeMap["props"]["color"];
  config: {
    start?: NavbarSection;
    center?: NavbarSection;
    end?: NavbarSection;
  };
  variant?: ToolbarTypeMap["props"]["variant"];
}
