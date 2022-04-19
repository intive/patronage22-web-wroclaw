import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LogoutButtonWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(10),
  fontSize: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(12),
    right: theme.spacing(1)
  }
}));
