import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

export const StyledButton: React.FC<ButtonProps> = styled(Button).attrs({
  variant: "contained"
})`
  margin: 1rem !important;
  max-width: 11rem;
  align-self: flex-end;
`;
