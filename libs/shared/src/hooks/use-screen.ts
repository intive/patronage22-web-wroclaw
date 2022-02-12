import { useMediaQuery, useTheme } from "@mui/material";

export const useScreen = () => {
  const theme = useTheme();

  const sizes = {
    isSmall: useMediaQuery(theme.breakpoints.down("md")),
    isMedium: useMediaQuery(theme.breakpoints.between("md", "lg")),
    isLarge: useMediaQuery(theme.breakpoints.up("lg"))
  };

  return sizes;
};
