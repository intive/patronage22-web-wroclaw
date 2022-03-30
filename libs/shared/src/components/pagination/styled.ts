import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Form } from "../form";

export const PaginationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row"
  }
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "auto"
  }
}));

export const InfoBox = styled(Typography)({
  whiteSpace: "nowrap"
});

export const SizeSelector = styled(Form)(({ theme }) => ({
  margin: theme.spacing(0, 1.5, 0, 0.5),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "auto"
  }
}));
