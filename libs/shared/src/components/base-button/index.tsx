import { ButtonProps, IconButton } from "@mui/material";

import { useScreenSize } from "../../hooks";
import { ButtonType } from "../../types";
import * as Styled from "./styled";

export interface BaseButtonProps extends Pick<ButtonProps, "children" | "onClick" | "variant"> {
  type: ButtonType;
}

export const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, type, variant }) => {
  const { isMobile } = useScreenSize();
  const buttonSize = isMobile ? "small" : "medium";

  return type === ButtonType.Basic ? (
    <Styled.BasicButton size={buttonSize} onClick={onClick} variant={variant}>
      {children}
    </Styled.BasicButton>
  ) : (
    <IconButton size={buttonSize} onClick={onClick}>
      {children}
    </IconButton>
  );
};
