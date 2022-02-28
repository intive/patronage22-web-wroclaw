import { Box, InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchInputBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3)
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
  color: alpha(theme.palette.common.black, 0.5)
}));

export const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[800],

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));
