import { AppRoute } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { generatePath, Link, Params } from "react-router-dom";

interface LocalizedLinkProps {
  to: AppRoute | AppRoute[];
  routerParams?: Params;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, routerParams }) => {
  const { i18n } = useTranslation();
  const generateLocalizedPath = () =>
    `${generatePath(`${to instanceof Array ? to.join("/") : to}`, routerParams)}?lang=${i18n.language}`;

  return <Link to={generateLocalizedPath()}>{children}</Link>;
};
