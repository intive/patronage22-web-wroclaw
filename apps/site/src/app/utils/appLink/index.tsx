import { AppRoute } from "@patronage-web/shared";
import { generatePath, Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends Omit<LinkProps, "to"> {
  to: AppRoute;
  lang: string;
  linkId: string | undefined;
}

export const AppLink: React.FC<React.RefAttributes<HTMLAnchorElement> & AppLinkProps> = props => {
  const { to, lang, children, linkId, ...rest } = props;
  let path;

  if (to === AppRoute.EditPresentation || to === AppRoute.PresentationForExternalUser || to === AppRoute.AddPresentation) {
    path = `${generatePath(`${AppRoute.Presentation}/${to}`, { id: linkId })}?lang=${lang}`;
  } else {
    path = `${generatePath(`${to}`)}?lang=${lang}`;
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...rest} to={path}>
      {children}
    </Link>
  );
};
