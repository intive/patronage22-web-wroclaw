import "../../i18n";

import { AppRoute } from "@patronage-web/shared";
import i18next from "i18next";
import { generatePath, Link, LinkProps, Params } from "react-router-dom";

interface LocalizedLinkProps extends Omit<LinkProps, "to"> {
  to: AppRoute | AppRoute[];
  linkId?: string;
  params?: Params;
}

export const LocalizedLink: React.FC<React.RefAttributes<HTMLAnchorElement> & LocalizedLinkProps> = ({
  to,
  children,
  params,
  ...rest
}) => (
  <Link
    // Disabled, to pass all props from Link component
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    to={`${generatePath(`${to instanceof Array ? to.join("/") : to}`, params)}?lang=${i18next.language}`}
  >
    {children}
  </Link>
);
