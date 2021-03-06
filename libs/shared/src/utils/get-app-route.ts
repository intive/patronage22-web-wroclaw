import { REGEX_URL_FIRST_SLASH } from "../constants";
import { AppRouteType, ROUTES } from "../types";

export const getAppRoute = (type: AppRouteType, childOnly?: boolean) => {
  const targetRoute = ROUTES[type];
  const isCombinedRoute = Array.isArray(targetRoute);

  if (childOnly) {
    return (isCombinedRoute ? targetRoute[targetRoute.length - 1] : targetRoute).replace(REGEX_URL_FIRST_SLASH, "");
  }

  return isCombinedRoute ? targetRoute.reduce((acc, routePart) => acc + routePart, "") : targetRoute;
};
