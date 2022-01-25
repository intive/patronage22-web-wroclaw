import { Box } from "@mui/material";
import { TestButton } from "@patronage-web/features-feedback";
// eslint-disable-next-line sort-imports
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Box sx={{ mb: "1%" }}>Patronage App</Box>
    <TestButton variant='outlined' title='test button' />
  </StrictMode>,
  document.getElementById("root")
);
