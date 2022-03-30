import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchButtonBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  backgroundColor: alpha(theme.palette.primary.light, 0.1),
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.down("sm")]: {
    borderRadius: 0
  },

  "& .MuiButtonBase-root:hover": {
    backgroundColor: "transparent"
  },

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.2)
  }
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(1)
}));
