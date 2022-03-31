import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(10),
  right: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(12),
    right: theme.spacing(3)
  }
}));

export const LoginButtonStyle = {
  fontSize: "16px",
  width: "100px"
};
