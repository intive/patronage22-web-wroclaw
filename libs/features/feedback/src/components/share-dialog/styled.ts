import { ShareTwoTone } from "@mui/icons-material";
import {
  Box as MUIBox,
  Dialog as MUIDialog,
  DialogContentText as MUIDialogContentText,
  DialogTitle as MUIDialogTitle,
  Typography as MUITypography
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const QRCodeBox = styled(MUIBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(1),
  marginTop: theme.spacing(2)
}));

export const DialogTitle = styled(MUIDialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(0),
  marginTop: theme.spacing(3)
}));

export const DialogContentText = styled(MUIDialogContentText)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  padding: theme.spacing(1)
}));

export const Typography = styled(MUITypography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(1)
}));

export const ShareIcon = styled(ShareTwoTone)(({ theme }) => ({
  height: theme.spacing(8),
  width: theme.spacing(7),
  color: theme.shareDialog.iconColor
}));

export const IconBox = styled(MUIBox)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.shareDialog.iconBackgroundColor,
  height: theme.spacing(14),
  width: theme.spacing(14),
  borderRadius: theme.spacing(7),
  margin: "0 auto",
  marginTop: theme.spacing(-8)
}));

export const Dialog = styled(MUIDialog)(({ theme }) => ({
  marginTop: theme.spacing(5)
}));
