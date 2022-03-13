import { Box, styled } from "@mui/material";

export const Field = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",

  "& .MuiSvgIcon-root": {
    visibility: "hidden"
  },

  "&:hover": {
    "& .MuiSvgIcon-root": {
      visibility: "visible"
    }
  }
}));
