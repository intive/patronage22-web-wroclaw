import "./i18n";

import { ThemeProvider } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Layout, Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
