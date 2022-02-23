import { BasicLayout } from "@patronage-web/shared";

import { footerConfig } from "./footer-config";
import { navbarConfig } from "./navbar-config";

export const Layout: React.FC = ({ children }) => {
  return (
    <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
      {children}
    </BasicLayout>
  );
};
