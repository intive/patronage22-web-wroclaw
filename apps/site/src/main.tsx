import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { Homepage } from "./app/pages/homepage";
import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
  document.getElementById("root")
);
