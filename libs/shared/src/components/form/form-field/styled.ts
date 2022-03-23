import { Box, styled } from "@mui/material";

export const Field = styled(Box)({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",

  "& #editIcon": {
    visibility: "hidden"
  },

  "&:hover": {
    "& #editIcon": {
      visibility: "visible"
    }
  }
});
