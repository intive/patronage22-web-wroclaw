/* eslint-disable react/no-array-index-key */
import { AppBarProps, ToolbarProps } from "@mui/material";
import { SxProps } from "@mui/material/styles";

import * as Styled from "./style";

export interface NavbarSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum NavbarSectionPosition {
  Start = "start",
  Center = "center",
  End = "end"
}

export interface NavbarProps extends Pick<AppBarProps, "color">, Pick<ToolbarProps, "variant"> {
  config: Partial<Record<NavbarSectionPosition, NavbarSection>>;
}

export const Navbar: React.FC<NavbarProps> = ({ config, color = "transparent", variant = "dense" }) => {
  const navSectionElements = Object.values(NavbarSectionPosition).map((section, sectionIndex) => {
    const sectionItem = config[section];

    return (
      <Styled.NavbarSectionContainer key={`section-${sectionIndex}`} sx={sectionItem?.customStyles}>
        {sectionItem?.elements.map((element, elementIndex) => (
          <Styled.NavbarSectionItem key={`element-${elementIndex}`}> {element}</Styled.NavbarSectionItem>
        ))}
      </Styled.NavbarSectionContainer>
    );
  });

  return (
    <Styled.NavbarAppBar color={color}>
      <Styled.NavbarToolbar variant={variant}>{navSectionElements}</Styled.NavbarToolbar>
    </Styled.NavbarAppBar>
  );
};
