import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Timer = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.spacing(8),
  fontWeight: theme.typography.fontWeightRegular,
  margin: theme.spacing(2)
}));
