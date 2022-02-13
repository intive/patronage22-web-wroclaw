import { ImageOutlined as MUIImageOutlinedIcon, NavigateNext as MUINavigateNextIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// TODO when theme config will be applied - replace with theme color, weight, size
export const MediumTypography = styled(Typography)({
  color: "rgb(126, 126, 126)",
  fontWeight: 500,
  fontSize: "0.875rem"
});

// TODO when theme config will be applied - replace with theme color
export const ArrowSeparator = styled(MUINavigateNextIcon)({
  color: "rgb(158, 158, 158)"
});

// TODO when theme config will be applied - replace with theme color
export const BasicLogo = styled(MUIImageOutlinedIcon)({
  color: "rgb(59, 59, 59)",
  fontSize: "1.875rem"
});

export const AlignedCenterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center"
});
