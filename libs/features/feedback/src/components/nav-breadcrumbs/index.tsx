import { Breadcrumbs } from "@mui/material";
import { AppRoute, LocalizedLink } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  const { t } = useTranslation();

  return (
    <Breadcrumbs aria-label={t("breadcrumb")} separator={<Styled.ArrowSeparator />}>
      <LocalizedLink to={AppRoute.Home}>
        <Styled.AlignedCenterWrapper>
          <Styled.BasicLogo />
        </Styled.AlignedCenterWrapper>
      </LocalizedLink>

      {presentationName && <Styled.MediumTypography>{presentationName}</Styled.MediumTypography>}
    </Breadcrumbs>
  );
};
