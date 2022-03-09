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

  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1)
  }
}));
