import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageToggleButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid lightgrey",
  borderRadius: theme.shape.borderRadius,

  "& .MuiButtonBase-root": {
    padding: theme.spacing(0.5)
  }
}));

export const LeftButton = {
  borderLeft: "1px solid lightgrey",
  borderRadius: 0,

  "&:hover": {
    borderLeft: "1px solid lightgrey"
  }
};
