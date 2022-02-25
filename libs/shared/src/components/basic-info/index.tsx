import { useTranslation } from "react-i18next";

import { useFeatureName } from "../../hooks";
import { FeatureName } from "../../types";
import * as Styled from "./styled";

export const BasicInfo: React.FC = () => {
  const featureName = useFeatureName();
  const { t } = useTranslation();

  const customNames = {
    [FeatureName.Feedback]: t(`featureNames.feedback`),
    [FeatureName.ExternalFeedback]: t(`featureNames.feedback-external`),
    [FeatureName.Default]: ""
  };

  const companyInfo = `${t("intive.name")} ${
    featureName === FeatureName.Default ? customNames[FeatureName.Default] : `(${customNames[featureName]})`
  }`;

  return (
    <Styled.InfoContainer>
      <Styled.NameBox>{companyInfo}</Styled.NameBox>

      <Styled.InfoBox>
        <Styled.InfoAddressIcon />
        <Styled.TypographyBox>{t("intive.address")}</Styled.TypographyBox>
      </Styled.InfoBox>

      <Styled.InfoBox>
        <Styled.InfoPhoneIcon />
        <Styled.TypographyBox>{t("intive.phone")}</Styled.TypographyBox>
      </Styled.InfoBox>
    </Styled.InfoContainer>
  );
};
