import { Layout as BasicLayout, ThemeSelector } from "@patronage-web/shared";

import { footerConfig } from "../layout";
import { NavBreadcrumbs } from "../nav-breadcrumbs";

export const externalNavbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  end: {
    elements: [<ThemeSelector />]
  }
};

export const ExternalLayout: React.FC = ({ children }) => (
  <BasicLayout navbarConfig={externalNavbarConfig} footerConfig={footerConfig}>
    {children}
  </BasicLayout>
);
