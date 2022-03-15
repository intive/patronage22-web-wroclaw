import { Box, Drawer, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "& .MuiPaper-root": {
      overflow: "hidden"
    }
  }
}));

export const SearchDrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    justifyContent: "start",
    marginRight: theme.spacing(3),
    backgroundColor: alpha(theme.palette.primary.dark, 0.05),
    width: "100%"
  }
}));

export const CloseSearchBtnWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(1)
}));

export const SearchDrawerContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  alignItems: "center",
  flexDirection: "column"
}));

export const SearchResultsBtnBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  marginTop: theme.spacing(1),
  display: "flex",
  justifyContent: "center",

  "& .MuiButton-root": {
    borderRadius: 0,
    backgroundColor: alpha(theme.palette.primary.dark, 0.1)
  }
}));

export const InputBoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "85%"
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "50%"
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "40%"
  },

  [theme.breakpoints.up("lg")]: {
    width: "25%"
  }
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
