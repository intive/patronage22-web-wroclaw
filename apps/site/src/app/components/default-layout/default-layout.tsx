import { BasicLayout, BasicLayoutProps } from "@patronage-web/shared";

import { footerConfig } from "./footer-config";
import { navbarConfig } from "./navbar-config";

export interface DefaultLayoutProps {
  children: BasicLayoutProps["children"];
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
      {children}
    </BasicLayout>
  );
};
