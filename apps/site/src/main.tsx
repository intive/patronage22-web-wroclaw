import "./i18n";
import "libs/translations/src/i18n.tsx";

import { Box } from "@mui/material";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <StrictMode>
    <Box>Patronage App</Box>
  </StrictMode>,
  document.getElementById("root")
);
