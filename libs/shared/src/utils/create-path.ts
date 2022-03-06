import { generatePath, Params } from "react-router-dom";

import { AppRouteType } from "../types";
import { buildQueryString } from "./build-query-string";
import { getAppRoute } from "./get-app-route";

interface CreatePathProps {
  route: AppRouteType;
  params?: Params;
  language?: string;
  search?: string;
}

export const createPath = ({ route, params, language, search }: CreatePathProps) => {
  const queryString = buildQueryString(language, search);

  return `${generatePath(`${getAppRoute(route)}`, params)}${queryString}`;
};
