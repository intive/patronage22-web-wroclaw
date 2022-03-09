import { FormControl, styled } from "@mui/material";

export const Field = styled(FormControl)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  position: "relative",

  "& .MuiInput-root": {
    margin: 0
  },

  "& .MuiFilledInput-input": {
    paddingTop: theme.spacing(2)
  },

  "& .MuiFormLabel-root": {
    top: theme.spacing(-0.75)
  },

  "& .MuiInputLabel-standard": {
    top: theme.spacing(-1.25)
  },

  "& .MuiSvgIcon-root": {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: theme.spacing(1.5),
    visibility: "hidden"
  },

  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1)
  },

  "&:hover": {
    "& .MuiSvgIcon-root": {
      visibility: "visible"
    }
  }
}));
