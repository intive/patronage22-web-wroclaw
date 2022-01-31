import { Breadcrumbs, Link } from "@mui/material";
import { Logo } from "@patronage-web/shared";

import * as Styled from "./styled";

export interface NavBreadcrumbsProps {
  presentationName?: string;
}

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ presentationName }) => {
  return (
    <Breadcrumbs aria-label='breadcrumb' separator={<Styled.ArrowSeparator />}>
      <Link href='/'>
        <Logo />
      </Link>

      {presentationName ? <Styled.MediumTypography>{presentationName}</Styled.MediumTypography> : ""}
    </Breadcrumbs>
  );
};
