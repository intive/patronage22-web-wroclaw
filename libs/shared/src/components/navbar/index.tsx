import { NavbarProps } from "../../types";
import * as Styled from "./style";

export const Navbar: React.FC<NavbarProps> = ({ color = "transparent", config: { start, center, end } }) => (
  <Styled.Navbar color={color}>
    <Styled.NavToolbar variant='dense'>
      <Styled.StartSection customStyles={`${start?.customStyles}`}>
        {start?.elements.map(element => (
          <Styled.SectionItem>{element}</Styled.SectionItem>
        ))}
      </Styled.StartSection>
      <Styled.CenterSection customStyles={`${center?.customStyles}`}>
        {center?.elements.map(element => (
          <Styled.SectionItem>{element}</Styled.SectionItem>
        ))}
      </Styled.CenterSection>
      <Styled.EndSection customStyles={`${end?.customStyles}`}>
        {end?.elements.map(element => (
          <Styled.SectionItem>{element}</Styled.SectionItem>
        ))}
      </Styled.EndSection>
    </Styled.NavToolbar>
  </Styled.Navbar>
);
