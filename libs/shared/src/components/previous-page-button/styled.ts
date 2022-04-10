import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackArrowIcon = {
  width: "20px",
  marginRight: "5px"
};

export const PreviousPageButtonWrapper = styled(Box)(({ theme }) => ({
  display: "block",

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

export const PreviousPageButton = {
  fontFamily: "inherit",
  fontSize: "20px",
  borderRadius: "8px"
};
