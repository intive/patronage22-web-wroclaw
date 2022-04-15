import "./i18n";

import { Notifications, ThemeProvider } from "@patronage-web/shared";
import { store } from "@patronage-web/shared-data";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthGateway, Layout, Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AuthGateway>
            <Layout>
              <Routing />
              <Notifications />
            </Layout>
          </AuthGateway>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
  document.getElementById("root")
);
