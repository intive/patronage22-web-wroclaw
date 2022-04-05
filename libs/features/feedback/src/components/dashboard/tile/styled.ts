import { Box, Card, CardActions, CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DashboardCardProps } from "../../../types";

export const PresentationTileContainer = styled(Box)(({ theme }) => ({
  minWidth: "min-content",
  margin: theme.spacing(1)
}));

export const PresentationCard = styled(Card)<DashboardCardProps>(props => ({
  border: props.isPublic ? "2px solid blue" : "",

  "&:hover": {
    backgroundColor: "rgba(240, 240, 240, 0.2)",
    transform: "scale(1.1)"
  }
}));

export const PresentationTileHeader = styled(CardHeader)(({ theme }) => ({
  height: theme.spacing(15),
  display: "flex",
  overflow: "hidden",

  "& .MuiCardHeader-content": {
    overflow: "hidden"
  }
}));

export const PresentationTileButtonContainer = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",

  button: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(0.5)
  }
}));

export const PresentationTileButtonBox = styled(Box)(({ theme }) => ({
  display: "flex"
}));
