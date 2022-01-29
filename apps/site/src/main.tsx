import "./i18n";

import { NavHeader } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import { GlobalStyle } from "./style";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <NavHeader
      logoComponent={<p>Breadcrumbs</p>}
      searchBarComponent={<p style={{ backgroundColor: "grey", width: "100%" }}>SearchBar</p>}
      menuComponent={<p>ThemeSelector</p>}
    />
  </StrictMode>,
  document.getElementById("root")
);
