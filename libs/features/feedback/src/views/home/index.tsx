import { StarsImage } from "@patronage-web/features-feedback";
import { ActionCard, PagePath } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

export const HomeView: React.FC = () => {
  const { t } = useTranslation();

  return (
    // TODO - add layout when proper data will be delivered
    <ActionCard
      description={t("homepage.newPresentationDescription")}
      image={StarsImage}
      button={{
        variant: "contained",
        text: t("homepage.newPresentationButton"),
        navigateTo: PagePath.AddPresentation
      }}
    />
  );
};
