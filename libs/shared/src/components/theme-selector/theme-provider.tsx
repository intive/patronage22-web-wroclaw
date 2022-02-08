import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { ThemeMode } from "../../types";
import { dark, light } from "../../utils";

const ThemeModeContext = createContext({ toggleColorMode: () => {} });

export const useThemeContext = () => useContext(ThemeModeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode | undefined>();
  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        window.localStorage.setItem("theme", newMode);
        setMode(newMode);
      }
    }),
    [mode]
  );

  const theme = mode === ThemeMode.Dark ? dark : light;

  useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    setMode(localMode === ThemeMode.Dark ? ThemeMode.Dark : ThemeMode.Light);
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
