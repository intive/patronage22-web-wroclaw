import { generatePath, Params } from "react-router-dom";

import { AppRouteType } from "../types";
import { buildQueryString } from "./build-query-string";
import { getAppRoute } from "./get-app-route";

interface CreatePathFn {
  ({ route, params, language, search }: { route: AppRouteType; params?: Params; language?: string; search?: string }): string;
}

export const createPath: CreatePathFn = ({ route, params, language, search }) => {
  const queryString = buildQueryString(language, search);

  return `${generatePath(`${getAppRoute(route)}`, params)}${queryString}`;
};
