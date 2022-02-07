import { centerSectionStyles } from "./style";

// TODO elements should be replaced with components (Breadcrumbs, SearchBar, ThemeSelector) when will be ready
export const navbarConfig = {
  start: {
    elements: [<div>Breadcrumbs</div>]
  },
  center: {
    elements: [<div>SearchBar</div>],
    customStyles: centerSectionStyles
  },
  end: {
    elements: [<div>ThemeSelector</div>]
  }
};
