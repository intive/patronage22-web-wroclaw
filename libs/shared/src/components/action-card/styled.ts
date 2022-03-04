import { Box, Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "space-between",
  margin: theme.spacing(2),
  borderRadius: theme.spacing(1),

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexWrap: "nowrap",
    margin: theme.spacing(11, 2)
  },

  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    width: theme.spacing(92)
  }
}));

export const CardActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(2, 1),

  a: {
    alignSelf: "center",
    textDecoration: "none",

    [theme.breakpoints.up("sm")]: {
      alignSelf: "flex-end"
    }
  },

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 5)
  }
}));

export const CardActionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "justify",

  [theme.breakpoints.up("sm")]: {
    maxWidth: theme.spacing(50)
  },

  [theme.breakpoints.up("md")]: {
    width: theme.spacing(50),
    padding: theme.spacing(1, 0, 0, 0)
  }
}));

export const CardActionButtonBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    marginTop: 0
  }
}));

export const ActionCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(22),

  [theme.breakpoints.up("sm")]: {
    maxWidth: "40%"
  }
}));
