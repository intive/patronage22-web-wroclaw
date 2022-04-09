import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackArrowIconStyle = {
  width: "20px",
  marginRight: "5px"
};

export const PreviousPageButtonWrapper = styled(Box)(({ theme }) => ({
  display: "block",

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));
