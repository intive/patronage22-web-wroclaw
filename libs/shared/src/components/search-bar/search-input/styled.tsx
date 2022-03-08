import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import { Form } from "../../form";

export const SearchInputBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.1),

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.25)
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 0
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

export const SearchInputBase = styled(Form)(({ theme }) => ({
  color: theme.palette.primary.dark,
  maxWidth: "100%",
  margin: 0,

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 6)
  },

  "& .MuiFormControl-root": {
    margin: 0
  }
}));
