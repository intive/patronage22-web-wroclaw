import { ButtonProps, IconButton } from "@mui/material";

import { useScreenSize } from "../../hooks";
import * as Styled from "./styled";

export enum ButtonType {
  Basic = "basic",
  Icon = "icon"
}
export interface BaseButtonProps extends Pick<ButtonProps, "children" | "onClick" | "variant" | "disabled" | "startIcon" | "sx"> {
  type: ButtonType;
}

export const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, type, variant, disabled, startIcon, sx }) => {
  const { isMobile } = useScreenSize();
  const buttonSize = isMobile ? "small" : "medium";

  const types = {
    [ButtonType.Basic]: (
      <Styled.BasicButton size={buttonSize} onClick={onClick} variant={variant} disabled={disabled} startIcon={startIcon} sx={sx}>
        {children}
      </Styled.BasicButton>
    ),
    [ButtonType.Icon]: (
      <IconButton size={buttonSize} onClick={onClick}>
        {children}
      </IconButton>
    )
  };

  return types[type];
};
