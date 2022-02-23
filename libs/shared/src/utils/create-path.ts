import { generatePath, Params } from "react-router-dom";

import { AppRouteType, SupportedLanguage } from "../types";
import { getAppRoute } from "./get-app-route";

export const createPath = (route: AppRouteType, params?: Params, language?: string) => {
  const lang = language?.length && language !== SupportedLanguage.En ? `?lang=${language}` : "";

  return `${generatePath(`${getAppRoute(route)}`, params)}${lang}`;
};
