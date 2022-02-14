import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// sample styles
export const CenteredWhiteWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff"
});

export const MediumImageWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(50),
  paddingTop: theme.spacing(5)
}));
