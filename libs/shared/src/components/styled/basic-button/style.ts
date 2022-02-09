import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// TODO replace with proper colors (for light and dark theme) when ThemeSelector will be done
export const BasicButton = styled(Button)(({ variant, theme }) => ({
  color: variant === "outlined" ? theme.palette.grey[800] : theme.palette.common.white,
  backgroundColor: variant === "outlined" ? "transparent" : theme.palette.grey[800],
  textTransform: "none",

  "&:hover": {
    color: variant === "outlined" ? theme.palette.common.white : theme.palette.grey[800],
    backgroundColor: variant === "outlined" ? theme.palette.grey[800] : theme.palette.grey[200]
  },

  "&:disabled": {
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[300]
  }
}));
