import { useTranslation } from "react-i18next";
import { Link, LinkProps, Params } from "react-router-dom";

import { AppRouteType } from "../../types";
import { createPath } from "../../utils";

export interface LocalizedLinkProps extends Pick<LinkProps, "style"> {
  to: AppRouteType;
  routerParams?: Params;
  searchPhrase?: string;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, routerParams, searchPhrase }) => {
  const { i18n } = useTranslation();

  const localizedPath = createPath({ route: to, params: routerParams, language: i18n.language, search: searchPhrase });

  return (
    <Link to={localizedPath} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};
