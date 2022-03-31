import { SearchBar, ThemeSelector } from "@patronage-web/shared";

import { NavBreadcrumbs } from "../nav-breadcrumbs";
import { navbarCenterSectionStyles } from "./styled";
// TODO center element should be replaced with SearchBar when will be ready
export const navbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  center: {
    elements: [<SearchBar />],
    customStyles: navbarCenterSectionStyles
  },
  end: {
    elements: [<ThemeSelector />]
  }
};
