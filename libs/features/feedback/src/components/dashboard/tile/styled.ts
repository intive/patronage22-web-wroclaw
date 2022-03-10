import { Box, Card, CardActions, CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DashboardCardProps } from "./index";

export const DashboardTileHeader = styled(CardHeader)(({ theme }) => ({
  height: theme.spacing(15),
  display: "flex",
  overflow: "hidden",

  "& .MuiCardHeader-content": {
    overflow: "hidden"
  }
}));

export const DashboardTileButtonContainer = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",

  button: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

export const DashboardTileContainer = styled(Box)(({ theme }) => ({
  minWidth: "min-content",
  margin: theme.spacing(1)
}));

export const BorderCard = styled(Card)<DashboardCardProps>(props => ({
  border: props.isPublic ? "2px solid blue" : ""
}));
