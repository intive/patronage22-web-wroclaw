import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "styled-components";

// TODO when theme config will be applied - replace with theme color, weight, size
export const MediumTypography = styled(Typography)`
  color: rgb(126, 126, 126);
  font-weight: 500;
  font-size: 14px;
`;

// TODO when theme config will be applied - replace with theme color
export const ArrowSeparator = styled(NavigateNextIcon)`
  color: rgb(158, 158, 158);
`;
