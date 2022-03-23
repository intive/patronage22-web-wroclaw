import { alpha, styled } from "@mui/material/styles";

import { Form } from "../../form";

export const SearchInputBase = styled(Form)(({ theme }) => ({
  color: theme.palette.primary.dark,
  maxWidth: "100%",
  margin: 0,
  backgroundColor: alpha(theme.palette.primary.light, 0.1),
  borderRadius: theme.shape.borderRadius,

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.25)
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    backgroundColor: "inherit"
  },

  "& .MuiFormControl-root": {
    margin: 0,
    flexGrow: 1
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none"
    }
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1)
  },

  "& .MuiFormHelperText-root.Mui-error": {
    marginLeft: theme.spacing(2)
  }
}));
