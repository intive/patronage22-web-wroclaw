import { Google } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  const { t } = useTranslation(TranslationNamespace.Common);

  return (
    <BaseButton onClick={onClick} type={ButtonType.Basic} variant='contained' endIcon={<Google />}>
      {t("login.loginWith")}
    </BaseButton>
  );
};
