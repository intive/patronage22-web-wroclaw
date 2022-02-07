import {
  Box as MUIBox,
  Button as MUIButton,
  Card as MUICard,
  CardMedia as MUICardMedia,
  Typography as MUITypography
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionCard = styled(MUICard)(({ theme }) => ({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "space-between",
  backgroundColor: "#f7f7f7",
  borderRadius: theme.spacing(1),

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexWrap: "nowrap",
    margin: theme.spacing(11, 0)
  },

  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    width: theme.spacing(92)
  }
}));

export const CardActionBox = styled(MUIBox)(({ theme }) => ({
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

export const CardActionDescription = styled(MUITypography)(({ theme }) => ({
  textAlign: "justify",

  [theme.breakpoints.up("sm")]: {
    maxWidth: theme.spacing(50)
  },

  [theme.breakpoints.up("md")]: {
    width: theme.spacing(50),
    padding: theme.spacing(1, 0, 0, 0)
  }
}));

export const CardActionButton = styled(MUIButton)(({ theme }) => ({
  fontSize: "1rem",
  alignSelf: "center",
  backgroundColor: "#515151",
  textTransform: "none",
  height: theme.spacing(5),
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),

  "&:hover": { backgroundColor: "black" },

  [theme.breakpoints.up("sm")]: {
    marginTop: 0
  }
}));

export const CardMedia = styled(MUICardMedia)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(22),

  [theme.breakpoints.up("sm")]: {
    maxWidth: "40%"
  }
}));
