import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

// TODO replace with proper colors (for light and dark theme) when ThemeSelector will be done
export const BasicIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[800],

  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800]
  }
}));
