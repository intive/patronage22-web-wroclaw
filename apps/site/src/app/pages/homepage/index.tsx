import { ActionCard, TranslationNamespace } from "@patronage-web/shared";
import StarsImage from "libs/features/feedback/src/assets/stars-placeholder.png";
import { useTranslation } from "react-i18next";
import * as Styled from "./styled";

export const Homepage: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Common);

  return (
    <Styled.Box>
      <ActionCard
        description={t("homepage.newPresentationDescription")}
        image={StarsImage}
        button={{ variant: "contained", text: t("homepage.newPresentationButton") }}
      />
    </Styled.Box>
  );
};
