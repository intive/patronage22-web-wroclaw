/* eslint-disable react/no-array-index-key */
import { AppBarProps, ToolbarProps } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import { isProtectedRoute } from "../../utils";
import { LogoutButton } from "../logout-button";
import * as Styled from "./styled";

export interface NavbarSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum NavbarSectionPosition {
  Start = "start",
  Center = "center",
  End = "end"
}

export interface NavbarProps extends Pick<AppBarProps, "color" | "position">, Pick<ToolbarProps, "variant"> {
  config: Partial<Record<NavbarSectionPosition, NavbarSection>>;
}

export const Navbar: React.FC<NavbarProps> = ({ config, color, position, variant = "dense" }) => {
  const location = useLocation();
  const protectedRoute = isProtectedRoute(location);

  const sectionsElements: Record<NavbarSectionPosition, JSX.Element[]> = {
    [NavbarSectionPosition.Start]: [],
    [NavbarSectionPosition.Center]: [],
    [NavbarSectionPosition.End]: []
  };

  if (protectedRoute) {
    sectionsElements[NavbarSectionPosition.End].push(<LogoutButton key='logout-button' />);
  }

  const navSectionElements = Object.values(NavbarSectionPosition).map((section, sectionIndex) => {
    const sectionItem = config[section];

    return (
      <Styled.NavbarSectionContainer key={`section-${sectionIndex}`} sx={sectionItem?.customStyles}>
        {sectionItem?.elements.map((element, elementIndex) => (
          <Styled.NavbarSectionItem key={`element-${elementIndex}`}>{element}</Styled.NavbarSectionItem>
        ))}
        {sectionsElements[section]}
      </Styled.NavbarSectionContainer>
    );
  });

  return (
    <Styled.AppNavbar position={position} color={color}>
      <Styled.NavbarToolbar variant={variant}>{navSectionElements}</Styled.NavbarToolbar>
    </Styled.AppNavbar>
  );
};
