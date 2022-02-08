/* eslint-disable react/no-array-index-key */

import { FooterProps, FooterSectionPosition } from "../../types";
import * as Styled from "./style";

export const Footer: React.FC<FooterProps> = ({ config, color = "primary" }) => {
  const footerSectionElements = Object.values(FooterSectionPosition).map(section => {
    const sectionItem = config[section];

    return (
      <Styled.SectionContainer key={`section-${section}`} sx={sectionItem?.customStyles}>
        {sectionItem?.elements.map((element, elementIndex) => (
          <Styled.SectionItem key={`element-${elementIndex}`}> {element}</Styled.SectionItem>
        ))}
      </Styled.SectionContainer>
    );
  });

  return (
    <Styled.AppBar color={color}>
      <Styled.Toolbar>{footerSectionElements}</Styled.Toolbar>
    </Styled.AppBar>
  );
};
