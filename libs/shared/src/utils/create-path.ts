import { generatePath, Params } from "react-router-dom";

import { AppRoute, SupportedLanguage } from "../types";

export const createPath = (path: AppRoute | AppRoute[], params?: Params, language?: string, search?: string) => {
  const lang = language?.length && language !== SupportedLanguage.En ? `?lang=${language}` : "";
  const searchPhrase = lang.length ? `&q=${search}` : `?q=${search}`;
  const searchQuery = search ? searchPhrase : "";
  const basePath = path instanceof Array ? path.join("/") : path;

  return `${generatePath(`${basePath}`, params)}${lang}${searchQuery}`;
};
