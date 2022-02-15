/* eslint-disable react/no-array-index-key */

import * as Styled from "./style";

export const Footer: React.FC<Styled.FooterProps> = ({ config, color = "primary" }) => {
  const footerSectionElements = Object.values(Styled.FooterSectionPosition).map(section => {
    const sectionItem = config[section];

    return (
      <Styled.FooterSectionContainer key={`section-${section}`} sx={sectionItem?.customStyles}>
        {sectionItem?.elements.map((element, elementIndex) => (
          <Styled.FooterSectionItem key={`element-${elementIndex}`}> {element}</Styled.FooterSectionItem>
        ))}
      </Styled.FooterSectionContainer>
    );
  });

  return (
    <Styled.FooterAppBar color={color}>
      <Styled.FooterToolbar>{footerSectionElements}</Styled.FooterToolbar>
    </Styled.FooterAppBar>
  );
};
