import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackArrowIconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  display: "flex",

  "& svg": {
    width: theme.spacing(2.5)
  }
}));

export const PreviousPageButtonWrapper = styled(Box)(({ theme }) => ({
  display: "block",

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));
