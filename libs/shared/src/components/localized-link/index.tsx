import { useTranslation } from "react-i18next";
import { Link, Params } from "react-router-dom";

import { AppRouteType } from "../../types";
import { createPath } from "../../utils";

export interface LocalizedLinkProps {
  to: AppRouteType;
  routerParams?: Params;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, routerParams }) => {
  const { i18n } = useTranslation();

  const localizedPath = createPath(to, routerParams, i18n.language);

  return <Link to={localizedPath}>{children}</Link>;
};
