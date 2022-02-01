import "./i18n";

import { navbarConfig } from "@patronage-web/features-feedback";
import { Navbar } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import { GlobalStyle } from "./app";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Navbar config={navbarConfig} />
  </StrictMode>,
  document.getElementById("root")
);
