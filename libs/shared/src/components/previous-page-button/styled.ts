import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PreviousButtonStyle = {
  fontSize: "1rem",
  borderRadius: "8px",
  fontFamily: "inherit"
};

export const BackArrowIconStyle = {
  width: "20px",
  marginRight: "5px"
};

export const PreviousPageButtonWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(10),
  left: theme.spacing(4),
  display: "block",

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));
