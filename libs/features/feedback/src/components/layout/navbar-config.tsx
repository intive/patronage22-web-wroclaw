import { FeedbackRoute, SearchBar, ThemeSelector } from "@patronage-web/shared";

import { NavBreadcrumbs } from "../nav-breadcrumbs";
import { navbarCenterSectionStyles } from "./style";
// TODO center element should be replaced with SearchBar when will be ready
export const navbarConfig = {
  start: {
    elements: [<NavBreadcrumbs />]
  },
  center: {
    elements: [
      <SearchBar searchKey='title' allResultsPage={FeedbackRoute.Dashboard} singleResultPage={FeedbackRoute.EditPresentation} />
    ],
    customStyles: navbarCenterSectionStyles
  },
  end: {
    elements: [<ThemeSelector />]
  }
};
