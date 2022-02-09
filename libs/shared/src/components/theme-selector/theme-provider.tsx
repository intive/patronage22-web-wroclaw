import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";

import { ThemeMode } from "../../types";
import { dark, light } from "../../utils";

const ThemeModeContext = createContext({ toggleColorMode: () => {} });

export const useThemeContext = () => useContext(ThemeModeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const localStorageThemeValue = window.localStorage.getItem("theme");

  const [mode, setMode] = useState(localStorageThemeValue ?? ThemeMode.Light);

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

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
