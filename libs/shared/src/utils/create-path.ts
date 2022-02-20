import { generatePath, Params } from "react-router-dom";

import { AppRoute, SupportedLanguage } from "../types";

export const createPath = (path: AppRoute | AppRoute[], params?: Params, language?: string) => {
  const lang = language?.length && language !== SupportedLanguage.En ? `?lang=${language}` : "";
  const basePath = path instanceof Array ? path.join("/") : path;

  return `${generatePath(`${basePath}`, params)}${lang}`;
};
