import { Box, Button, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MenuItemBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  alignItems: "center",
  flexDirection: "column"
}));

export const ListItem = styled(MenuItem)(() => ({
  color: "black"
}));

export const DrawerHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  alignItems: "center"
}));

export const ClosingButton = styled(Button)(() => ({
  position: "absolute",
  top: "1rem",
  right: ".5rem"
}));

export const ShowResultsButton = styled(Button)(() => ({
  width: "100%",
  background: "#efefef",
  marginTop: ".5rem"
}));
