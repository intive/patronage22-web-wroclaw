import "./i18n";

import { ThemeProvider } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
