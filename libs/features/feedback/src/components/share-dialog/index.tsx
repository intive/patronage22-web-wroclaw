import { DialogActions, DialogContent } from "@mui/material";
import {
  AppRoute,
  BaseButton,
  BaseSnackbar,
  ButtonType,
  copyToClipboard,
  createPath,
  QR_CODE_SIZE,
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
  const { t } = useTranslation([TranslationNamespace.Feedback, TranslationNamespace.Common]);
  const path = createPath([AppRoute.Presentation, AppRoute.ExternalUserPresentation], { id });
  const link = `${window.location.origin}${path}`;

  const [message, setMessage] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleCopySuccess = () => {
    setMessage(t("linkCopied", { ns: TranslationNamespace.Common }));
  };
  const handleCopyFail = () => {
    setMessage(t("linkCopyingFailed", { ns: TranslationNamespace.Common }));
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
      <Styled.ShareDialogTitle>{t("sharePresentation", { ns: TranslationNamespace.Feedback })}</Styled.ShareDialogTitle>
      <DialogContent>
        <Styled.ShareDialogContentText>
          {t("shareDialogMessage", { name: title, ns: TranslationNamespace.Feedback })}
        </Styled.ShareDialogContentText>
        <Styled.LinkTypography>{link}</Styled.LinkTypography>
        <Styled.QRCodeBox>
          <QRCode value={link} size={QR_CODE_SIZE} />
        </Styled.QRCodeBox>
      </DialogContent>
      <DialogActions>
        <BaseButton type={ButtonType.Basic} onClick={onClose}>
          {t("cancel", { ns: TranslationNamespace.Common })}
        </BaseButton>
        <BaseButton type={ButtonType.Basic} variant='contained' onClick={handleCopyBtnClick}>
          {t("copyLink", { ns: TranslationNamespace.Common })}
        </BaseButton>
      </DialogActions>
      <BaseSnackbar open={isSnackbarOpen} onClose={handleSnackbarClose} message={message} />
    </Styled.BasicShareDialog>
  );
};
