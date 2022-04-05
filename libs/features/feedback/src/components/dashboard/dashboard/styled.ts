import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FeedbackDashboardGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export const TileGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%"
  },

  [theme.breakpoints.up("sm")]: {
    width: "50%"
  },

  [theme.breakpoints.up("md")]: {
    width: "33%"
  },

  [theme.breakpoints.up("lg")]: {
    width: "25%"
  },

  [theme.breakpoints.up("xl")]: {
    width: "20%"
  }
}));
