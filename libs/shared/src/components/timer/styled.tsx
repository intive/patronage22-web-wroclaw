import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Timer = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  textAlign: "center",
  fontSize: theme.spacing(2),
  fontWeight: "bold",
  margin: theme.spacing(1)
}));
