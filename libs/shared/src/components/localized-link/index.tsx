import { useTranslation } from "react-i18next";
import { Link, Params } from "react-router-dom";

import { PAGE_PATHS } from "../../constants";
import { PagePath } from "../../types";
import { createPath } from "../../utils";

interface LocalizedLinkProps {
  to: PagePath;
  routerParams?: Params;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, routerParams }) => {
  const { i18n } = useTranslation();

  const path = PAGE_PATHS[to];
  const localizedPath = createPath(path, routerParams, i18n.language);

  return <Link to={localizedPath}>{children}</Link>;
};
