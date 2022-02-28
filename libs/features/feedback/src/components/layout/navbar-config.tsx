import { ThemeSelector } from "@patronage-web/shared";

import { NavBreadcrumbs } from "../nav-breadcrumbs";
import { navbarCenterSectionStyles } from "./style";

// TODO center element should be replaced with SearchBar when will be ready
export const navbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  center: {
    elements: [<div>SearchBar</div>],
    customStyles: navbarCenterSectionStyles
  },
  end: {
    elements: [<ThemeSelector />]
  }
};
