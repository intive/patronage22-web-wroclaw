import { Layout as BasicLayout, PreviousPageButton } from "@patronage-web/shared";

import { footerConfig } from "./footer-config";
import { navbarConfig } from "./navbar-config";

export const Layout: React.FC = ({ children }) => (
  <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
    <PreviousPageButton />

    {children}
  </BasicLayout>
);
