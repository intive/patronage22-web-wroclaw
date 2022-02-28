import { Footer, FooterProps } from "../../components/footer";
import { Navbar, NavbarProps } from "../../components/navbar";
import * as Styled from "./style";

export interface BasicLayoutProps {
  navbarConfig: NavbarProps["config"];
  footerConfig: FooterProps["config"];
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({ children, navbarConfig, footerConfig }) => (
  <Styled.LayoutBox>
    <Navbar color='inherit' position='sticky' config={navbarConfig} />
    <Styled.ContentBox>{children}</Styled.ContentBox>
    <Footer color='inherit' position='static' config={footerConfig} />
  </Styled.LayoutBox>
);