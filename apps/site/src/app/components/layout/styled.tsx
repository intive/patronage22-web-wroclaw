import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PreviousPageWrapper = styled(Box)(({ theme }) => ({
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: theme.spacing(1),
  display: "flex",
  width: "100%"
}));
