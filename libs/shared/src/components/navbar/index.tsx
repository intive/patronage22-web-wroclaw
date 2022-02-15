/* eslint-disable react/no-array-index-key */
import * as Styled from "./style";

export const Navbar: React.FC<Styled.NavbarProps> = ({ config, color = "transparent", variant = "dense" }) => {
  const navSectionElements = Object.values(Styled.NavbarSectionPosition).map((section, sectionIndex) => {
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
