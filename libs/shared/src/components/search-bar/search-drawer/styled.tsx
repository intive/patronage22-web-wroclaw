import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  background: theme.palette.grey[300],
  marginTop: theme.spacing(1),
  display: "flex",
  justifyContent: "center"
}));
