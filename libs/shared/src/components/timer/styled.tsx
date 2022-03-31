import { styled, Typography } from "@mui/material";

export const Timer = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.spacing(8),
  fontWeight: "normal",
  margin: theme.spacing(2)
}));
