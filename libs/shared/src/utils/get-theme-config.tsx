import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { ThemeMode } from "../types";

export const commonStyles = createTheme({
  shape: {
    borderRadius: 6
  }
});

declare module "@mui/material/styles" {
  interface Theme {
    shareDialog: {
      iconBackgroundColor: string;
      iconColor: string;
    };
  }
  interface ThemeOptions {
    shareDialog?: {
      iconBackgroundColor?: string;
      iconColor?: string;
    };
  }
}

export const dark = createTheme({
  ...commonStyles,
  palette: {
    mode: ThemeMode.Dark,
    primary: { main: grey[100], light: grey[50], dark: grey[300] }
  },
  shareDialog: {
    iconBackgroundColor: grey[600],
    iconColor: grey[200]
  }
});

export const light = createTheme({
  ...commonStyles,
  palette: {
    mode: ThemeMode.Light,
    primary: { main: grey[800], light: grey[600], dark: grey[900] }
  },
  shareDialog: {
    iconBackgroundColor: grey[300],
    iconColor: grey[700]
  }
});
