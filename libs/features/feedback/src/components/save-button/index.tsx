import { AppRoute, BasicButton, createPath } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const SaveButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClickHandler = () => {
    // TODO add new presentation
    navigate(createPath(AppRoute.Dashboard));
  };

  return <BasicButton text={t("save")} onClick={onClickHandler} />;
};
