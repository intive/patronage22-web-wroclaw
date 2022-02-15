import { ButtonProps, IconButton } from "@mui/material";

import { useScreenSize } from "../../hooks";
import * as Styled from "./styled";

export enum ButtonType {
  Basic = "basic",
  Icon = "icon"
}
export interface BaseButtonProps extends Pick<ButtonProps, "children" | "onClick" | "variant"> {
  type: ButtonType;
}

export const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, type, variant }) => {
  const { isMobile } = useScreenSize();
  const buttonSize = isMobile ? "small" : "medium";

  const BASE_BUTTON_TYPE = {
    [ButtonType.Basic]: (
      <Styled.BasicButton size={buttonSize} onClick={onClick} variant={variant}>
        {children}
      </Styled.BasicButton>
    ),
    [ButtonType.Icon]: (
      <IconButton size={buttonSize} onClick={onClick}>
        {children}
      </IconButton>
    )
  };

  return BASE_BUTTON_TYPE[type];
};
