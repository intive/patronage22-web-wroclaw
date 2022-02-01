/* eslint-disable react/destructuring-assignment */
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type Props = {
  children: React.ReactChild[];
};

export const ThemeSelectorProvider = (props: Props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
