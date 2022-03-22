import { Box, styled } from "@mui/material";

export const ViewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(0, 2)
}));
