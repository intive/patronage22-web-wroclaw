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
        const newMode = mode === "light" ? "dark" : "light";
        window.localStorage.setItem("theme", newMode);
        setMode(newMode);
      }
    }),
    [mode]
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

  React.useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    setMode(localMode === "dark" ? "dark" : "light");
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
