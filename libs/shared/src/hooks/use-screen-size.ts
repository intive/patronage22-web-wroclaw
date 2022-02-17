import { useMediaQuery, useTheme } from "@mui/material";

export const useScreenSize = () => {
  const theme = useTheme();

  const sizes = {
    isMobile: useMediaQuery(theme.breakpoints.down("md")),
    isTablet: useMediaQuery(theme.breakpoints.between("md", "lg")),
    isDesktop: useMediaQuery(theme.breakpoints.up("lg"))
  };

  return sizes;
};
