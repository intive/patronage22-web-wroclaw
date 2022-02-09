import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { ThemeMode } from "../types";

export const dark = createTheme({
  palette: {
    mode: ThemeMode.Dark,
    primary: { main: grey[100] }
  }
});

export const light = createTheme({
  palette: {
    mode: ThemeMode.Light,
    primary: { main: grey[800] }
  }
});
