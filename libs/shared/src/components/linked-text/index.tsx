import { Typography, TypographyVariant } from "@mui/material";

import { AppRouteType } from "../../types";
import { LocalizedLink } from "../localized-link";

interface LinkedTextProps {
  variant: TypographyVariant;
  route: AppRouteType;
  text: string;
}

export const LinkedText: React.FC<LinkedTextProps> = ({ variant, route, text }) => (
  <LocalizedLink to={route}>
    <Typography variant={variant}>{text}</Typography>
  </LocalizedLink>
);
