import { isOtherLanguage } from "./lang-fns";

enum QueryParam {
  Lang = "lang",
  Search = "search"
}

export const buildQueryString = (language?: string, searchPrase?: string) => {
  const params = new URLSearchParams();

  if (language && isOtherLanguage(language)) {
    params.set(QueryParam.Lang, language);
  }

  if (searchPrase) {
    params.set(QueryParam.Search, searchPrase);
  }

  const setParams = params.toString();

  return setParams ? `?${setParams}` : "";
};
