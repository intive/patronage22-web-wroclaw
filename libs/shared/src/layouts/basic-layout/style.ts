import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
});

export const ContentBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1
});
