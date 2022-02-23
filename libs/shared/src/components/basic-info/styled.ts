import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column"
});

export const NameBox = styled(Box)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: `${theme.spacing(0.5)} 0`
}));

export const TypographyBox = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(0.5)
}));

export const InfoAddressIcon = styled(BusinessIcon)({
  fontSize: "1.3rem"
});
export const InfoPhoneIcon = styled(LocalPhoneIcon)({
  fontSize: "1.3rem"
});
