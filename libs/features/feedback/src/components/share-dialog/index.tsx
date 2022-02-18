import { ShareTwoTone } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from "@mui/material";
import { AppRoute, BaseButton, ButtonType, TranslationNamespace } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

export interface ShareDialogProps {
  open: boolean;
  onClose(): void;
  id: string;
  presentationName: string;
}

export const ShareDialog: React.FC<ShareDialogProps> = props => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { open, onClose, id, presentationName } = props;
  const link = `${window.location.origin}${AppRoute.Presentation}/${id}`;

  const handleClose = () => {
    onClose();
  };

  const [message, setMessage] = useState<string>("");
  const [snackOpen, setSnackOpen] = useState(false);

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const onSuccess = () => {
    setMessage(t("shareDialog.successSnackbar"));
  };
  const onFail = () => {
    setMessage(t("shareDialog.failedSnackbar"));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(onSuccess, onFail);
    setSnackOpen(true);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box>
        <ShareTwoTone fontSize='large' />
      </Box>
      <DialogTitle>{t("shareDialog.title")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t("shareDialog.message", { PRESENTATION_NAME: presentationName })}</DialogContentText>
        <DialogContentText>{link}</DialogContentText>
        <QRCode value={link} size={192} />
      </DialogContent>
      <DialogActions>
        <BaseButton type={ButtonType.Basic} onClick={handleClose}>
          {t("shareDialog.cancelButton")}
        </BaseButton>
        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleCopy}>
          {t("shareDialog.copyButton")}
        </BaseButton>
      </DialogActions>
      <Snackbar
        open={snackOpen}
        onClose={handleSnackClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={1500}
        message={message}
      />
    </Dialog>
  );
};

export const SimpleDialogDemo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const id = "23456";
  const PRESENTATION_NAME = "PRESENTATION_NAME";

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open a dialog
      </Button>
      <ShareDialog open={open} onClose={handleClose} id={id} presentationName={PRESENTATION_NAME} />
    </div>
  );
};
