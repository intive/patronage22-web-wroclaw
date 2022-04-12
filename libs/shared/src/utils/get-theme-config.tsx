import { common, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { ThemeMode } from "../types";

export const commonStyles = createTheme({
  shape: {
    borderRadius: 6
  }
});

export const dark = createTheme({
  ...commonStyles,
  palette: {
    mode: ThemeMode.Dark,
    primary: { main: grey[100], light: grey[50], dark: grey[300] },
    background: { default: grey[900], paper: grey[800] }
  },
  dialog: {
    iconBackgroundColor: grey[600],
    iconColor: grey[200]
  },
  dashboard: {
    dashboardTileBackgroundColor: "#6e6967"
  }
});

export const light = createTheme({
  ...commonStyles,
  palette: {
    mode: ThemeMode.Light,
    primary: { main: grey[800], light: grey[600], dark: grey[900] },
    background: { default: common.white, paper: "#f7f7f7" }
  },
  dialog: {
    iconBackgroundColor: grey[300],
    iconColor: grey[700]
  },
  dashboard: {
    dashboardTileBackgroundColor: "#bababa"
  }
});
