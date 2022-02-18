import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MenuItemBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center",
  flexDirection: "column"
}));

export const DrawerHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center"
}));

export const ClosingButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2)
}));

export const ShowResultsButtonBox = styled(Box)(({ theme }) => ({
  width: "100%",
  background: "#efefef",
  marginTop: theme.spacing(1),
  display: "flex",
  justifyContent: "center"
}));
