import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchDrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center"
}));

export const CloseSearchBtnWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2)
}));

export const SearchDrawerContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center",
  flexDirection: "column"
}));

export const SearchResultsBtnBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  background: alpha(theme.palette.primary.dark, 0.1),
  marginTop: theme.spacing(1),
  display: "flex",
  justifyContent: "center"
}));

export const InputBoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "30%"
  }
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
