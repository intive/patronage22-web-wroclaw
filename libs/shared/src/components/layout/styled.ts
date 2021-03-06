import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh"
});

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexGrow: 1,
  width: "100%",
  maxWidth: theme.spacing(192),
  padding: theme.spacing(1),
  overflowX: "hidden",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));
