import { Box } from "@mui/material";
import { Homepage } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Box>Patronage App</Box>
    <Homepage />
  </StrictMode>,
  document.getElementById("root")
);
