import "./i18n";

import { footerConfig as feedbackFooterConfig } from "@patronage-web/features-feedback";
import { Footer } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    <Footer config={feedbackFooterConfig} />
  </StrictMode>,
  document.getElementById("root")
);
