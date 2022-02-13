import { Box, BoxProps, FormHelperText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Form = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2)
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: theme.spacing(2, 0),

  ".MuiInput-root": {
    fontSize: "1.25rem",
    margin: theme.spacing(0, 2)
  },

  ".Mui-error": {
    border: "1px solid #d32f2f"
  }
}));

export const HelperText = styled(FormHelperText)({
  color: "#d32f2f"
});
