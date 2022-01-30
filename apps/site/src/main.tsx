import "./i18n";

import { AppRoute } from "@patronage-web/shared";
import i18next from "i18next";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppLink, Routing } from "./app/utils";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
      {/* component for testing links, will be removed */}
      <AppLink linkId='123' to={AppRoute.EditPresentation} lang={i18next.language}>
        <button type='button'>Test</button>
      </AppLink>
      {/* ... */}
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
