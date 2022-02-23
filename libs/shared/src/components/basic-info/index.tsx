import { useTranslation } from "react-i18next";

import { COMPANY_NAME, COMPANY_PHONE } from "../../constants";
import { useFeatureName } from "../../hooks";
import * as Styled from "./styled";

export const BasicInfo: React.FC = () => {
  const featureName = useFeatureName();
  const { t } = useTranslation();

  return (
    <Styled.InfoContainer>
      <Styled.NameBox>{`${COMPANY_NAME} ${featureName === "default" ? "" : `(${featureName})`}`}</Styled.NameBox>

      <Styled.InfoBox>
        <Styled.InfoAddressIcon />
        <Styled.TypographyBox>{t("intive.address")}</Styled.TypographyBox>
      </Styled.InfoBox>

      <Styled.InfoBox>
        <Styled.InfoPhoneIcon />
        <Styled.TypographyBox>{COMPANY_PHONE}</Styled.TypographyBox>
      </Styled.InfoBox>
    </Styled.InfoContainer>
  );
};
