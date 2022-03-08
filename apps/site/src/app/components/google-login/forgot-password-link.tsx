import { Typography, TypographyVariant } from "@mui/material";
import { AppRouteType, LocalizedLink } from "@patronage-web/shared";

interface ForgotPasswordButtonProps {
  variant: TypographyVariant;
  route: AppRouteType;
  text: string;
}

export const ForgotPasswordLink: React.FC<ForgotPasswordButtonProps> = ({ variant, route, text }) => (
  <LocalizedLink to={route}>
    <Typography variant={variant}>{text}</Typography>
  </LocalizedLink>
);
