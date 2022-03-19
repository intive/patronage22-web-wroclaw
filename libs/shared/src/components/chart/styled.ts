import { styled } from "@mui/material";
import { Bar } from "react-chartjs-2";

export const LiveResultsChartBar = styled(Bar)(({ theme }) => ({
  padding: theme.spacing(2),
  width: theme.spacing(50),
  height: theme.spacing(50),
  margin: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));
