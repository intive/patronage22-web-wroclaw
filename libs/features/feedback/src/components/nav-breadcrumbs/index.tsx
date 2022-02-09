import { Breadcrumbs } from "@mui/material";
import { AppRoute } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  const { t } = useTranslation();

  return (
    <Breadcrumbs aria-label={t("breadcrumb")} separator={<Styled.ArrowSeparator />}>
      <Styled.AlignedCenterLink href={AppRoute.Home}>
        <Styled.BasicLogo />
      </Styled.AlignedCenterLink>

      {presentationName && <Styled.MediumTypography>{presentationName}</Styled.MediumTypography>}
    </Breadcrumbs>
  );
};
