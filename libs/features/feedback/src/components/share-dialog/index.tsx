import { DialogActions, DialogContent } from "@mui/material";
import {
  AppRoute,
  BaseButton,
  BaseSnackbar,
  ButtonType,
  copyToClipboard,
  createPath,
  TranslationNamespace
} from "@patronage-web/shared";
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
  const { t } = useTranslation(TranslationNamespace.Feedback);
  const path = createPath([AppRoute.Presentation, AppRoute.ExternalUserPresentation], { id });
  const link = `${window.location.origin}${path}`;

  const [message, setMessage] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleCopySuccess = () => {
    setMessage(t("shareDialog.successSnackbar"));
  };
  const handleCopyFail = () => {
    setMessage(t("shareDialog.failedSnackbar"));
  };

  const handleCopyBtnClick = () => {
    copyToClipboard(link, handleCopySuccess, handleCopyFail);
    setIsSnackbarOpen(true);
  };

  return (
    <Styled.BasicShareDialog open={open} onClose={onClose}>
      <Styled.IconBox>
        <Styled.ShareIcon />
      </Styled.IconBox>

      <Styled.ShareDialogTitle>{t("shareDialog.title")}</Styled.ShareDialogTitle>

      <DialogContent>
        <Styled.ShareDialogContentText>{t("shareDialog.message", { name: title })}</Styled.ShareDialogContentText>

        <Styled.LinkTypography>{link}</Styled.LinkTypography>

        <Styled.QRCodeBox>
          <QRCode value={link} size={160} />
        </Styled.QRCodeBox>
      </DialogContent>

      <DialogActions>
        <BaseButton type={ButtonType.Basic} onClick={onClose}>
          {t("shareDialog.cancelButton")}
        </BaseButton>

        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleCopyBtnClick}>
          {t("shareDialog.copyButton")}
        </BaseButton>
      </DialogActions>

      <BaseSnackbar
        open={isSnackbarOpen}
        onClose={handleSnackbarClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={1500}
        message={message}
      />
    </Styled.BasicShareDialog>
  );
};
