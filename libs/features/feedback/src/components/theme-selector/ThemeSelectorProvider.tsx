import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@patronage-web/shared";
import React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type Props = {
  children: React.ReactChild[] | React.ReactChild;
};

export const ThemeSelectorProvider = ({ children }: Props) => {
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

  const theme = React.useMemo(() => createTheme(mode === "dark" ? darkTheme : lightTheme), [mode]);
  const [mountedComponent, setMountedComponent] = React.useState(false);

  React.useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    setMode(localMode === "dark" ? "dark" : "light");
    setMountedComponent(true);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mountedComponent ? children : <div />}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
