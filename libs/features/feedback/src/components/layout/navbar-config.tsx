import { LogoutButton, SearchBar, ThemeSelector } from "@patronage-web/shared";

import { NavBreadcrumbs } from "../nav-breadcrumbs";
import { navbarCenterSectionStyles } from "./styled";

export const navbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  center: {
    elements: [<SearchBar />],
    customStyles: navbarCenterSectionStyles
  },
  end: {
    elements: [<ThemeSelector />, <LogoutButton />]
  }
};
