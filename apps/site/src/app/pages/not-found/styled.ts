import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResizableText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h4.fontSize
  }
}));
