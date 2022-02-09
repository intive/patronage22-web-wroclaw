import { IconButtonProps, useMediaQuery, useTheme } from "@mui/material";

import * as Styled from "./style";

export const IconButton: React.FC<IconButtonProps> = ({ children, disabled, onClick, sx }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Styled.BasicIconButton size={isScreenSmall ? "small" : "medium"} disabled={disabled} onClick={onClick} sx={sx}>
      {children}
    </Styled.BasicIconButton>
  );
};
