import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark, light } from "@patronage-web/shared";
import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        window.localStorage.setItem("theme", newMode);
        setMode(newMode);
      }
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(mode === "dark" ? dark : light), [mode]);
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    setMode(localMode === "dark" ? "dark" : "light");
    setMountedComponent(true);
  }, []);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {mountedComponent ? children : <div />}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
