import "./i18n";

import { ShareDialogDemo } from "@patronage-web/features-feedback";
import { ThemeProvider } from "@patronage-web/shared";
import { store } from "@patronage-web/shared-data";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Layout, Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routing />
            <ShareDialogDemo />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
  document.getElementById("root")
);
