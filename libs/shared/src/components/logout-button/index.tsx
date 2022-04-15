import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BaseRoute, TranslationNamespace } from "../../types";
import { createPath } from "../../utils";
import { BaseButton, ButtonType } from "../base-button";
import * as Styled from "./styled";

export const LogoutButton = () => {
  const { t, i18n } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO replace logic when login functionality will be ready
    navigate(createPath({ route: BaseRoute.Login, language: i18n.language }));
  };

  return (
    <Styled.LogoutButtonWrapper>
      <BaseButton type={ButtonType.Basic} onClick={handleLogout}>
        {t("login.logout")}
      </BaseButton>
    </Styled.LogoutButtonWrapper>
  );
};