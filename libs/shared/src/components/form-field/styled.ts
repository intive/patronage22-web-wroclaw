import { FormControl, styled } from "@mui/material";

export const Field = styled(FormControl)({
  display: "inline-flex",
  justifyContent: "center",
  position: "relative",

  "& .MuiInput-root": {
    margin: 0
  },

  "& .MuiSvgIcon-root": {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 10,
    visibility: "hidden"
  },

  "&:hover": {
    "& .MuiSvgIcon-root": {
      visibility: "visible"
    }
  }
});
