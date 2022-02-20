import { generatePath, Params } from "react-router-dom";

import { Route, SupportedLanguage } from "../types";

export const createPath = (path: Route | Route[], params?: Params, language?: string) => {
  const lang = language?.length && language !== SupportedLanguage.En ? `?lang=${language}` : "";
  const basePath = path instanceof Array ? path.join("/") : path;

  return `${generatePath(`${basePath}`, params)}${lang}`;
};
