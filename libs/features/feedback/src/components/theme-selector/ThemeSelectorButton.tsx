import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton, useTheme } from "@mui/material";
import React from "react";

import { ColorModeContext } from "./ThemeSelectorProvider";

export const ThemeSelectorButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton onClick={() => colorMode.toggleColorMode()} color='inherit'>
      {theme.palette.mode === "dark" ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}
    </IconButton>
  );
};
