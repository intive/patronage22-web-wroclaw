import "./i18n";

import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { ThemeProvider } from "@patronage-web/shared";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <FeedbackLayout>
          <Routing />
        </FeedbackLayout>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
