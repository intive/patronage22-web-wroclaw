import { FIRST_CHARACTER_FRONT_SLASH } from "../constants";
import { AppRouteType, ROUTES } from "../types";

export const getAppRoute = (type: AppRouteType, childOnly?: boolean) => {
  const targetRoute = ROUTES[type];
  const isCombinedRoute = Array.isArray(targetRoute);

  if (childOnly) {
    return (isCombinedRoute ? targetRoute[targetRoute.length - 1] : targetRoute).replace(FIRST_CHARACTER_FRONT_SLASH, "");
  }

  return isCombinedRoute ? targetRoute.reduce((acc, routePart) => acc + routePart, "") : targetRoute;
};
