import { useTranslation } from "react-i18next";

import { useFirebaseService } from "../../services";
import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import * as Styled from "./styled";

export const LogoutButton = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { signOut } = useFirebaseService();

  return (
    <Styled.LogoutButtonWrapper>
      <BaseButton type={ButtonType.Basic} onClick={signOut}>
        {t("login.logout")}
      </BaseButton>
    </Styled.LogoutButtonWrapper>
  );
};
