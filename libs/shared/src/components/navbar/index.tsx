import { v4 as uuidv4 } from "uuid";

import { NavbarProps } from "../../types";
import * as Styled from "./style";

export const Navbar: React.FC<NavbarProps> = ({ config: { start, center, end }, color = "transparent", variant = "dense" }) => (
  <Styled.AppBar color={color}>
    <Styled.Toolbar variant={variant}>
      {[start, center, end].map(position => (
        <Styled.SectionContainer key={uuidv4()} sx={position?.customStyles}>
          {position?.elements.map(element => (
            <Styled.SectionItem key={uuidv4()}>{element}</Styled.SectionItem>
          ))}
        </Styled.SectionContainer>
      ))}
    </Styled.Toolbar>
  </Styled.AppBar>
);
