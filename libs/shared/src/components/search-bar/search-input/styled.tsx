import { Box, InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchInputBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.1),

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.25)
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: "0"
  }
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: alpha(theme.palette.primary.dark, 0.5)
}));

export const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.dark,
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 6)
  }
}));
