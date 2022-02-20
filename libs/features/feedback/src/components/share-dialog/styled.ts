import { ShareTwoTone } from "@mui/icons-material";
import { Box, Dialog, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const QRCodeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(1),
  marginTop: theme.spacing(2)
}));

export const ShareDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(0),
  marginTop: theme.spacing(3)
}));

export const ShareDialogContentText = styled(DialogContentText)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  padding: theme.spacing(1)
}));

export const LinkTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(1),
  wordBreak: "break-word"
}));

export const ShareIcon = styled(ShareTwoTone)(({ theme }) => ({
  height: theme.spacing(8),
  width: theme.spacing(7),
  color: theme.dialog.iconColor
}));

export const IconBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.dialog.iconBackgroundColor,
  height: theme.spacing(14),
  width: theme.spacing(14),
  borderRadius: theme.spacing(7),
  margin: "0 auto",
  marginTop: theme.spacing(-8)
}));

export const BasicShareDialog = styled(Dialog)(({ theme }) => ({
  marginTop: theme.spacing(5)
}));
