import "./i18n";

import { ThemeProvider } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    <ThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
