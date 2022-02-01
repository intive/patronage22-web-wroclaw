import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const Navbar = styled(AppBar)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  align-content: space-evenly;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1536px;
  margin: 5px 0;
`;

export const StartSection = styled.div<{ customStyles: string }>`
  display: flex;
  margin: ${props => props.customStyles};
`;

export const CenterSection = styled.div<{ customStyles: string }>`
  display: flex;
  ${props => props.customStyles};
`;

export const EndSection = styled.div<{ customStyles: string }>`
  display: flex;
  ${props => props.customStyles};
`;

export const SectionItem = styled.div`
  width: 100%;
  margin: 0 7px;
  // TODO when theme config will be applied - replace with theme breakpoints
  @media (min-width: 900px) {
    margin: 0 12px;
  }
`;
