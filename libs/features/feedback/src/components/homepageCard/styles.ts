import { Button, Card, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard: React.FC = styled(Card)`
  width: 50%;
`;

export const StyledTypography: React.FC = styled(Typography)`
  width: 50%;
`;

export const StyledButton: React.FC = styled(Button).attrs({
  variant: "contained"
})``;
