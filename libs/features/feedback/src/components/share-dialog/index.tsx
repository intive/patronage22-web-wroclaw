import { DialogActions, DialogContent } from "@mui/material";
import {
  BaseButton,
  ButtonType,
  createPath,
  FeedbackRoute,
  getDomainName,
  QR_CODE_SIZE,
  TranslationNamespace,
  useClipboardCopy
} from "@patronage-web/shared";
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
  const copy = useClipboardCopy();
  const path = createPath({ route: FeedbackRoute.ExternalUserPresentation, params: { id }, language: i18n.language });
  const link = `${getDomainName()}${path}`;

  const handleCopyBtnClick = () => {
    copy(link);
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
          <QRCode value={link} size={QR_CODE_SIZE} />
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
    </Styled.BasicShareDialog>
  );
};
