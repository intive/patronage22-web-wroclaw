import "./i18n";

import { Box } from "@mui/material";
import { ThemeProvider } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <Box>Patronage App</Box>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
