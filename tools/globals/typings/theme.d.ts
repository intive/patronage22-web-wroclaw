import "@mui/material/styles";

declare module "@mui/material/styles" {
    export interface Theme {
      dialog: {
        iconBackgroundColor: string;
        iconColor: string;
      };
    }
    export interface ThemeOptions {
      dialog?: {
        iconBackgroundColor?: string;
        iconColor?: string;
      };
    }
}