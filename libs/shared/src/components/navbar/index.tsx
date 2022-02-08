/* eslint-disable react/no-array-index-key */
import { NavbarProps, NavbarSectionPosition } from "../../types";
import * as Styled from "./style";

export const Navbar: React.FC<NavbarProps> = ({ config, color = "transparent", variant = "dense" }) => {
  const navSectionElements = Object.values(NavbarSectionPosition).map((section, sectionIndex) => {
    const sectionItem = config[section];

    return (
      <Styled.SectionContainer key={`section-${sectionIndex}`} sx={sectionItem?.customStyles}>
        {sectionItem?.elements.map((element, elementIndex) => (
          <Styled.SectionItem key={`element-${elementIndex}`}> {element}</Styled.SectionItem>
        ))}
      </Styled.SectionContainer>
    );
  });

  return (
    <Styled.AppBar color={color}>
      <Styled.Toolbar variant={variant}>{navSectionElements}</Styled.Toolbar>
    </Styled.AppBar>
  );
};
