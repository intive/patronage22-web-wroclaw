import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PresentationSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: theme.spacing(1)
}));

export const LiveSummaryTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1),
  fontWeight: theme.typography.fontWeightBold
}));

export const DiagramContainer = styled(Box)({
  maxWidth: "90%"
});
