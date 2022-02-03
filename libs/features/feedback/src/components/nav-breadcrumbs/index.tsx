import { Breadcrumbs } from "@mui/material";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  const { t } = useTranslation();

  return (
    <Breadcrumbs aria-label={t("breadcrumb")} separator={<Styled.ArrowSeparator />}>
      <Styled.AlignedCenterLink href='/'>
        <Styled.BasicLogo />
      </Styled.AlignedCenterLink>

      {presentationName && <Styled.MediumTypography>{presentationName}</Styled.MediumTypography>}
    </Breadcrumbs>
  );
};
