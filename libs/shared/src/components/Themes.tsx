import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: grey[100] }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: grey[800] }
  }
});
