import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MediumImageWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(50),
  paddingTop: theme.spacing(5)
}));
