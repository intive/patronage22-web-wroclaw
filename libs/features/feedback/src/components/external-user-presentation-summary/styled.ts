import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PresentationSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: theme.spacing(1),

  "& .summaryTitle": {
    margin: theme.spacing(1)
  }
}));

export const DiagramContainer = styled(Box)({
  maxWidth: "90%"
});
