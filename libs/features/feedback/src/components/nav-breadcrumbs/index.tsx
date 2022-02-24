import { Breadcrumbs } from "@mui/material";
import { LocalizedLink, PagePath } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  const { t } = useTranslation();

  return (
    <Breadcrumbs aria-label={t("breadcrumb.breadcrumb")} separator={<Styled.ArrowSeparator />}>
      <LocalizedLink to={PagePath.Home}>
        <Styled.AlignedCenterWrapper>
          <Styled.BasicLogo />
        </Styled.AlignedCenterWrapper>
      </LocalizedLink>

      {presentationName && <Styled.MediumTypography>{presentationName}</Styled.MediumTypography>}
    </Breadcrumbs>
  );
};
