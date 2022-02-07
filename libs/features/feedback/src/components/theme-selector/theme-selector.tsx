import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton, useTheme } from "@mui/material";
import { ThemeMode } from "@patronage-web/shared";
import { useContext } from "react";

import { ThemeModeContext } from "./theme-provider";

export const ThemeSelector = () => {
  const theme = useTheme();
  const themeMode = useContext(ThemeModeContext);

  return (
    <IconButton onClick={() => themeMode.toggleColorMode()} color='inherit'>
      {theme.palette.mode === ThemeMode.dark ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}
    </IconButton>
  );
};