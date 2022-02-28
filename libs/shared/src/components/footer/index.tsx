/* eslint-disable react/no-array-index-key */
import { AppBarProps } from "@mui/material";
import { SxProps } from "@mui/material/styles";

import * as Styled from "./style";

export interface FooterSection {
  customStyles?: SxProps;
  elements: JSX.Element[];
}

export enum FooterSectionPosition {
  Start = "start",
  End = "end"
}

export interface FooterProps extends Pick<AppBarProps, "color" | "position"> {
  config: Partial<Record<FooterSectionPosition, FooterSection>>;
}

export const Footer: React.FC<FooterProps> = ({ config, color, position }) => {
  const footerSectionElements = Object.values(FooterSectionPosition).map(section => {
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
    <Styled.FooterAppBar position={position} color={color}>
      <Styled.FooterToolbar>{footerSectionElements}</Styled.FooterToolbar>
    </Styled.FooterAppBar>
  );
};
