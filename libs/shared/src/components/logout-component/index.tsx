import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BaseRoute, TranslationNamespace } from "../../types";
import { createPath } from "../../utils";
import { BaseButton, ButtonType } from "../base-button";
import * as Styled from "./styled";

export const LogoutButton = () => {
  // TODO replace logic when login functionality will be ready
  const { t, i18n } = useTranslation(TranslationNamespace.Common);
  const [isLogin, setIsLogin] = useState(true);
  const buttonMessage = isLogin ? t("login.logout") : t("login.login");
  const navigate = useNavigate();

  const handleLog = () => {
    if (isLogin) {
      setIsLogin(false);
    }

    if (!isLogin) {
      navigate(createPath({ route: BaseRoute.Login, language: i18n.language }));
    }
  };

  return (
    <Styled.LoginButtonWrapper>
      <BaseButton type={ButtonType.Basic} onClick={handleLog} sx={Styled.LoginButtonStyle}>
        {buttonMessage}
      </BaseButton>
    </Styled.LoginButtonWrapper>
  );
};
