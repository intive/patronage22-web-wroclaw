import { BasicLayout, BasicLayoutProps } from "@patronage-web/shared";

import { footerConfig } from "./footer-config";
import { navbarConfig } from "./navbar-config";

export interface LayoutProps {
  children: BasicLayoutProps["children"];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
      {children}
    </BasicLayout>
  );
};
