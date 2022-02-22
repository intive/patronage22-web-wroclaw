import { SupportedLanguage } from "../types";

export const buildQueryString = (language?: string, searchPrase?: string) => {
  const params = new URLSearchParams();
  if (language && language !== SupportedLanguage.En) {
    params.set("lang", language);
  }
  if (searchPrase) {
    params.set("search", searchPrase);
  }

  return params.toString();
};
