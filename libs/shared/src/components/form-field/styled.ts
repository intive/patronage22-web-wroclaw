import { FormControl, styled } from "@mui/material";

export const Field = styled(FormControl)({
  display: "inline-flex",
  justifyContent: "center",
  position: "relative",

  "& .MuiSvgIcon-root": {
    position: "absolute",
    zIndex: 1,
    right: 0,
    visibility: "hidden"
  },

  "&:hover": {
    "& .MuiSvgIcon-root": {
      visibility: "visible"
    }
  }
});
