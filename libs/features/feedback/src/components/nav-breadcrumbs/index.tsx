import { Breadcrumbs } from "@mui/material";
import { BaseRoute, LocalizedLink, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Breadcrumbs aria-label={t("breadcrumb.breadcrumb")} separator={<Styled.ArrowSeparator />}>
      <LocalizedLink to={BaseRoute.Home}>
        <Styled.AlignedCenterWrapper>
          <Styled.BasicLogo color='primary' />
        </Styled.AlignedCenterWrapper>
      </LocalizedLink>

      {presentationName && <Styled.MediumTypography>{presentationName}</Styled.MediumTypography>}
    </Breadcrumbs>
  );
};
