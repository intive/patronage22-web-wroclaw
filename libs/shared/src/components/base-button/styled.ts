import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BasicButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderColor: theme.palette.primary.dark,

  "&:hover": {
    borderColor: theme.palette.primary.light
  },

  "&:disabled": {
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[300]
  }
}));
