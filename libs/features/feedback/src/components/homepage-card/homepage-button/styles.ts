import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

export const StyledButton: React.FC<ButtonProps> = styled(Button).attrs({
  variant: "contained"
})`
  width: 174px;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  align-self: center;
  text-transform: none;
  margin-top: 16px;

  @media (min-width: 600px) {
    align-self: flex-end;
    margin-top: 0;
  }
`;
