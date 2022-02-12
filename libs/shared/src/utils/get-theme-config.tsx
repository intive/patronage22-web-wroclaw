import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { ThemeMode } from "../types";

export const generalTheme = createTheme({
  shape: {
    borderRadius: 6
  }
});

export const dark = createTheme({
  ...generalTheme,
  palette: {
    mode: ThemeMode.Dark,
    primary: { main: grey[100], light: grey[50], dark: grey[300] }
  }
});

export const light = createTheme({
  ...generalTheme,
  palette: {
    mode: ThemeMode.Light,
    primary: { main: grey[800], light: grey[600], dark: grey[900] }
  }
});
