import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DiagramCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  maxWidth: "95%",

  [theme.breakpoints.up("md")]: {
    width: theme.spacing(60)
  }
}));

export const LiveResultsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: theme.spacing(1, 3)
}));
