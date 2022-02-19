import { generatePath, Params } from "react-router-dom";

import { AppRoute, SupportedLanguage } from "../types";

export const setSearchQuery = (lang: string, search?: string) => {
  const searchPhrase = lang.length ? `&q=${search}` : `?q=${search}`;

  return search ? searchPhrase : "";
};

export const createPath = (path: AppRoute | AppRoute[], params?: Params, language?: string, search?: string) => {
  const lang = language?.length && language !== SupportedLanguage.En ? `?lang=${language}` : "";
  const searchQuery = setSearchQuery(lang, search);
  const basePath = path instanceof Array ? path.join("/") : path;

  return `${generatePath(`${basePath}`, params)}${lang}${searchQuery}`;
};
