import { ImageOutlined, NavigateNext } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MediumTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: "0.875rem"
}));

export const ArrowSeparator = styled(NavigateNext)(({ theme }) => ({
  color: theme.palette.primary.light
}));

export const BasicLogo = styled(ImageOutlined)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "1.875rem"
}));

export const AlignedCenterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center"
});
