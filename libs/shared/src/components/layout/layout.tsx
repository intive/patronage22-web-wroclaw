import { Footer, FooterProps } from "../footer";
import { Navbar, NavbarProps } from "../navbar";
import * as Styled from "./styled";

export interface LayoutProps {
  navbarConfig: NavbarProps["config"];
  footerConfig: FooterProps["config"];
}

export const Layout: React.FC<LayoutProps> = ({ children, navbarConfig, footerConfig }) => (
  <Styled.LayoutBox>
    <Navbar color='inherit' position='sticky' config={navbarConfig} />
    <Styled.ContentBox>{children}</Styled.ContentBox>
    <Footer color='inherit' position='static' config={footerConfig} />
  </Styled.LayoutBox>
);
