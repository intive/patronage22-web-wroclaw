import { DialogActions, DialogContent, Snackbar } from "@mui/material";
import { AppRoute, BaseButton, ButtonType, TranslationNamespace } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

import * as Styled from "./styled";

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
    <Styled.Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          overflow: "visible"
        }
      }}
    >
      <Styled.IconBox>
        <Styled.ShareIcon fontSize='large' />
      </Styled.IconBox>
      <Styled.DialogTitle>{t("shareDialog.title")}</Styled.DialogTitle>
      <DialogContent>
        <Styled.DialogContentText>{t("shareDialog.message", { PRESENTATION_NAME: presentationName })}</Styled.DialogContentText>
        <Styled.Typography>{link}</Styled.Typography>
        <Styled.QRCodeBox>
          <QRCode value={link} size={160} />
        </Styled.QRCodeBox>
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
    </Styled.Dialog>
  );
};
