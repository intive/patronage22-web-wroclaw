import { ActionCard, FeedbackRoute } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import { StarsImage } from "../assets";

export const HomeView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ActionCard
      description={t("homepage.newPresentationDescription")}
      image={StarsImage}
      button={{
        variant: "contained",
        text: t("homepage.newPresentationButton"),
        navigateTo: FeedbackRoute.AddPresentation
      }}
    />
  );
};
