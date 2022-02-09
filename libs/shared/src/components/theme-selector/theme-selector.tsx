import { useTheme } from "@mui/material";

import { ThemeMode } from "../../types";
import * as Styled from "./style";
import { useThemeContext } from "./theme-provider";

const THEME_ICONS: Record<ThemeMode, JSX.Element> = {
  [ThemeMode.Dark]: <Styled.LightModeIcon />,
  [ThemeMode.Light]: <Styled.DarkModeIcon />
};

export const ThemeSelector = () => {
  const {
    palette: { mode }
  } = useTheme();

  const { toggleColorMode } = useThemeContext();

  return (
    <Styled.IconButton onClick={toggleColorMode} color='inherit'>
      {THEME_ICONS[mode]}
    </Styled.IconButton>
  );
};
