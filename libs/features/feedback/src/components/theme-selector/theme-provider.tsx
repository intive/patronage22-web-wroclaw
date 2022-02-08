import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark, light, ThemeMode } from "@patronage-web/shared";
import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode | undefined>();
  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
        window.localStorage.setItem("theme", newMode);
        setMode(newMode);
      }
    }),
    [mode]
  );

  const theme = mode === ThemeMode.dark ? dark : light;

  useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    setMode(localMode === ThemeMode.dark ? ThemeMode.dark : ThemeMode.light);
  }, []);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {mode && children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
