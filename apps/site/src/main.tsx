import "./i18n";

import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Homepage, Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
      <Homepage />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
