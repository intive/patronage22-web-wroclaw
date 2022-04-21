import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FeedbackDashboardGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export const FeedbackTileGrid = styled(Box)(({ theme }) => ({
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

export const FeedbackDashboardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
});

export const NewPresentationButtonContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "33%",

  [theme.breakpoints.down("sm")]: {
    width: "75%"
  }
}));
