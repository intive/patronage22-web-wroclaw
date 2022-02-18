import { ThemeSelector } from "@patronage-web/shared";

import { NavBreadcrumbs } from "../../components/nav-breadcrumbs";
import { centerSectionStyles } from "./style";

// TODO center element should be replaced with SearchBar when will be ready
export const navbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  center: {
    elements: [<div>SearchBar</div>],
    customStyles: centerSectionStyles
  },
  end: {
    elements: [<ThemeSelector />]
  }
};
