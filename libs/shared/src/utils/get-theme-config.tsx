import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: { main: grey[100] }
  }
});

export const light = createTheme({
  palette: {
    mode: "light",
    primary: { main: grey[800] }
  }
});
