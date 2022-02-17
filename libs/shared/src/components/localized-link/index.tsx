import { useTranslation } from "react-i18next";
import { Link, LinkProps, Params } from "react-router-dom";

import { PAGE_PATHS } from "../../constants";
import { PagePath } from "../../types";
import { createPath } from "../../utils";

export interface LocalizedLinkProps extends Pick<LinkProps, "style"> {
  to: PagePath;
  routerParams?: Params;
  searchPhrase?: string;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, routerParams, searchPhrase, style }) => {
  const { i18n } = useTranslation();

  const path = PAGE_PATHS[to];
  const localizedPath = createPath(path, routerParams, i18n.language, searchPhrase);

  return (
    <Link to={localizedPath} style={style}>
      {children}
    </Link>
  );
};
