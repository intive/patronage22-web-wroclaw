import { Box } from "@mui/material";
import { TestButton, TestButtonVariant } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Box sx={{ mb: "1%" }}>Patronage App</Box>
    <TestButton variant={TestButtonVariant.outlined} title='test button' />
  </StrictMode>,
  document.getElementById("root")
);
