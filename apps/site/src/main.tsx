import "./i18n";

import { Box, Button, Checkbox, Slider } from "@mui/material";
import { ThemeSelectorButton, ThemeSelectorProvider } from "@patronage-web/features-feedback";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <StrictMode>
    <ThemeSelectorProvider>
      <ThemeSelectorButton />
      <Box>Patronage App</Box>
      <Box>
        Theme Selector Demo
        <Box>
          <Checkbox />
          <Button>Test</Button>
          <Button variant='contained'>Test</Button>
          <Slider />
        </Box>
      </Box>
    </ThemeSelectorProvider>
  </StrictMode>,
  document.getElementById("root")
);
