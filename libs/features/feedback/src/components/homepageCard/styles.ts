import { Box, Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard: React.FC = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (min-width: 900px) {
    max-width: 46rem;
    margin-top: 6rem;
  }
`;

export const StyledCardBox: React.FC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;
