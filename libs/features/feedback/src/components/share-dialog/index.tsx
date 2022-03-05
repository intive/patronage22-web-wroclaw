import { DialogActions, DialogContent } from "@mui/material";
import {
  BaseButton,
  ButtonType,
  createPath,
  FeedbackRoute,
  QR_CODE_SIZE,
  TranslationNamespace,
  useClipboardCopy
} from "@patronage-web/shared";
import React from "react";
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
  const { i18n } = useTranslation();
  const path = createPath(FeedbackRoute.ExternalUserPresentation, { id }, i18n.language);
  const link = `${window.location.origin}${path}`;
  const copy = useClipboardCopy();

  const handleCopyBtnClick = () => {
    copy(link);
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
    </Styled.BasicShareDialog>
  );
};
