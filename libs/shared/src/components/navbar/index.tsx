import { NavbarProps } from "../../types";
import * as Styled from "./style";

export const Navbar: React.FC<NavbarProps> = ({ config: { start, center, end }, color = "transparent", variant = "dense" }) => (
  <Styled.AppBar color={color}>
    <Styled.Toolbar variant={variant}>
      {[start, center, end].map(position => (
        <Styled.SectionContainer sx={position?.customStyles}>
          {position?.elements.map(element => (
            <Styled.SectionItem>{element}</Styled.SectionItem>
          ))}
        </Styled.SectionContainer>
      ))}
    </Styled.Toolbar>
  </Styled.AppBar>
);
