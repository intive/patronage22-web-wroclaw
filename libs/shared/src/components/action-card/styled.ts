import {
  Box as MUIBox,
  Button as MUIButton,
  Card as MUICard,
  CardMedia as MUICardMedia,
  Typography as MUITypography
} from "@mui/material";
import { styled } from "@mui/system";

export const Card = styled(MUICard)(({ theme }) => ({
  display: "flex",
  flexFlow: "column wrap",
  borderRadius: theme.spacing(1),
  justifyContent: "space-between",
  backgroundColor: "#f7f7f7",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexWrap: "nowrap",
    margin: theme.spacing(11, 0)
  },
  [theme.breakpoints.up("md")]: {
    width: theme.spacing(92),
    justifyContent: "center"
  }
}));

export const Box = styled(MUIBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 5)
  }
}));

export const Typography = styled(MUITypography)(({ theme }) => ({
  textAlign: "justify",
  [theme.breakpoints.up("sm")]: {
    maxWidth: theme.spacing(50)
  },
  [theme.breakpoints.up("md")]: {
    width: theme.spacing(50),
    padding: theme.spacing(1, 0, 0, 0)
  }
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  height: theme.spacing(5),
  padding: theme.spacing(1, 2),
  fontSize: "1rem",
  alignSelf: "center",
  borderRadius: theme.spacing(1),
  textTransform: "none",
  marginTop: theme.spacing(2),
  backgroundColor: "#515151",
  "&:hover": { backgroundColor: "black" },
  [theme.breakpoints.up("sm")]: {
    alignSelf: "flex-end",
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
