import { AppRoute, BasicButton, createPath, useScreen } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const SaveButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isSmall } = useScreen();

  const handleClick = () => {
    // TODO add new presentation
    navigate(createPath(AppRoute.Dashboard));
  };

  return (
    <BasicButton size={isSmall ? "small" : "medium"} variant='outlined' onClick={handleClick}>
      {t("save")}
    </BasicButton>
  );
};
