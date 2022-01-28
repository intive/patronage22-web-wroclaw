import { Box, Card, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard: React.FC = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 88px;
    max-width: 736px;
  }

  @media (min-width: 900px) {
    min-width: 736px;
  }
`;

export const StyledCardBox: React.FC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 8px;

  @media (min-width: 600px) {
    padding: 24px 40px;
  }
`;

export const StyledTypography: React.FC = styled(Typography)`
  text-align: justify;

  @media (min-width: 600px) {
    max-width: 400px;
  }

  @media (min-width: 900px) {
    padding: 8px 0 0 0;
  }
`;
