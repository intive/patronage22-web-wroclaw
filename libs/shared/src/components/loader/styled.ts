import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoaderWrapper = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

export const LinearLoaderWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(50),
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    maxWidth: theme.spacing(20)
  }
}));
