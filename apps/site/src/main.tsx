import "./i18n";

import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./app/utils/routing";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
