import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { useTheme } from "@mui/material";

import { ThemeMode } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { useThemeContext } from "./theme-provider";

const THEME_ICONS: Record<ThemeMode, JSX.Element> = {
  [ThemeMode.Dark]: <LightModeTwoToneIcon />,
  [ThemeMode.Light]: <DarkModeTwoToneIcon />
};

export const ThemeSelector = () => {
  const {
    palette: { mode }
  } = useTheme();

  const { toggleColorMode } = useThemeContext();

  return (
    <BaseButton type={ButtonType.Icon} onClick={toggleColorMode}>
      {THEME_ICONS[mode]}
    </BaseButton>
  );
};
