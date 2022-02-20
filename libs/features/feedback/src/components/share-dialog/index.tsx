import { DialogActions, DialogContent } from "@mui/material";
import { AppRoute, BaseButton, BaseSnackbar, ButtonType, createPath, TranslationNamespace } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

import * as Styled from "./styled";

export interface ShareDialogProps {
  open: boolean;
  onClose: () => void;
  id: string;
  title: string;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({ open, onClose, id, title }) => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const path = createPath([AppRoute.Presentation, AppRoute.PresentationForExternalUser], { id });
  const link = `${window.location.origin}${path}`;

  const [message, setMessage] = useState("");
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const handleSnackClose = () => {
    setIsSnackOpen(false);
  };

  const onSuccess = () => {
    setMessage(t("shareDialog.successSnackbar"));
  };
  const onFail = () => {
    setMessage(t("shareDialog.failedSnackbar"));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(onSuccess, onFail);
    setIsSnackOpen(true);
  };

  return (
    <Styled.BasicShareDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          overflow: "visible"
        }
      }}
    >
      <Styled.IconBox>
        <Styled.ShareIcon />
      </Styled.IconBox>

      <Styled.ShareDialogTitle>{t("shareDialog.title")}</Styled.ShareDialogTitle>

      <DialogContent>
        <Styled.ShareDialogContentText>{t("shareDialog.message", { PRESENTATION_NAME: title })}</Styled.ShareDialogContentText>

        <Styled.LinkTypography>{link}</Styled.LinkTypography>

        <Styled.QRCodeBox>
          <QRCode value={link} size={160} />
        </Styled.QRCodeBox>
      </DialogContent>

      <DialogActions>
        <BaseButton type={ButtonType.Basic} onClick={onClose}>
          {t("shareDialog.cancelButton")}
        </BaseButton>

        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleCopy}>
          {t("shareDialog.copyButton")}
        </BaseButton>
      </DialogActions>

      <BaseSnackbar
        open={isSnackOpen}
        onClose={handleSnackClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={1500}
        message={message}
      />
    </Styled.BasicShareDialog>
  );
};
