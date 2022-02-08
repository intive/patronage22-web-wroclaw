import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton, useTheme } from "@mui/material";

import { ThemeMode } from "../../types";
import { useThemeContext } from "./theme-provider";

const THEME_ICONS: Record<ThemeMode, JSX.Element> = {
  [ThemeMode.Dark]: <LightModeTwoToneIcon />,
  [ThemeMode.Light]: <DarkModeTwoToneIcon />
};

export const ThemeSelector = () => {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <IconButton onClick={() => toggleColorMode()} color='inherit'>
      {THEME_ICONS[theme.palette.mode]}
    </IconButton>
  );
};
