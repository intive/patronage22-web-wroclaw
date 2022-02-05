import "./i18n";

import { navbarConfig } from "@patronage-web/features-feedback";
import { Navbar } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle, Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />

    <Navbar config={navbarConfig} />

    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
