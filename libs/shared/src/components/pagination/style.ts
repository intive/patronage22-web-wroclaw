import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaginationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row"
  }
}));

export const PaginationSectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(1),
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "auto"
  }
}));

export const PaginationInfoBox = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  whiteSpace: "nowrap"
}));
