import { Box, styled } from "@mui/material";

export const Field = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",

  "& #editIcon": {
    visibility: "hidden"
  },

  "&:hover": {
    "& #editIcon": {
      visibility: "visible"
    }
  }
}));
