import { centerSectionStyles } from "./style";

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
