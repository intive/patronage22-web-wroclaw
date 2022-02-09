import { ButtonProps, useMediaQuery, useTheme } from "@mui/material";

import * as Styled from "./style";

export interface BasicButtonProps extends ButtonProps {
  text: string;
}

export const BasicButton: React.FC<BasicButtonProps> = ({ disabled, text, onClick, variant = "outlined" }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Styled.BasicButton
      size={isScreenSmall ? "small" : "medium"}
      color='inherit'
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </Styled.BasicButton>
  );
};
