import { DialogActions, DialogContent } from "@mui/material";
import {
  AppRoute,
  BaseButton,
  BaseSnackbar,
  ButtonType,
  copyToClipboard,
  createPath,
  SNACKBAR_AUTO_HIDE_DURATION,
  TranslationNamespace
} from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

import * as Styled from "./styled";

const qrCodeSize = 160;

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
    setMessage(t("linkCopied"));
  };
  const handleCopyFail = () => {
    setMessage(t("linkCopyingFailed"));
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

      <Styled.ShareDialogTitle>{t("sharePresentation")}</Styled.ShareDialogTitle>

      <DialogContent>
        <Styled.ShareDialogContentText>{t("shareDialogMessage", { name: title })}</Styled.ShareDialogContentText>

        <Styled.LinkTypography>{link}</Styled.LinkTypography>

        <Styled.QRCodeBox>
          <QRCode value={link} size={qrCodeSize} />
        </Styled.QRCodeBox>
      </DialogContent>

      <DialogActions>
        <BaseButton type={ButtonType.Basic} onClick={onClose}>
          {t("cancel")}
        </BaseButton>

        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleCopyBtnClick}>
          {t("copyLink")}
        </BaseButton>
      </DialogActions>

      <BaseSnackbar
        open={isSnackbarOpen}
        onClose={handleSnackbarClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
        message={message}
      />
    </Styled.BasicShareDialog>
  );
};
