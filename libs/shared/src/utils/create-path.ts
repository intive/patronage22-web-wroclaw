import { generatePath, Params } from "react-router-dom";

import { AppRouteType } from "../types";
import { buildQueryString } from "./build-query-string";
import { getAppRoute } from "./get-app-route";

export const createPath = (route: AppRouteType, params?: Params, language?: string, search?: string) => {
  const queryString = buildQueryString(language, search);

  return `${generatePath(`${getAppRoute(route)}`, params)}${queryString}`;
};
