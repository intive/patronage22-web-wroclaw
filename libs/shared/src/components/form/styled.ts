import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Form = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2),
  maxWidth: theme.spacing(60)
}));
