import { StarsImage } from "@patronage-web/features-feedback";
import { ActionCard, PagePath, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

const Homepage: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Common);

  return (
    <Styled.Box>
      <ActionCard
        description={t("homepage.newPresentationDescription")}
        image={StarsImage}
        button={{
          variant: "contained",
          text: t("homepage.newPresentationButton"),
          navigateTo: PagePath.AddPresentation
        }}
      />
    </Styled.Box>
  );
};

export default Homepage;
