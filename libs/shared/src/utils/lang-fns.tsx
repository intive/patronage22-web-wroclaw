import { i18n } from "i18next";

import { SupportedLanguage } from "../types/translations";

export interface ChangeLanguage {
  (i18n: i18n, lang: SupportedLanguage): void;
}

export const changeLanguage: ChangeLanguage = (i18next, lang) => {
  i18next.changeLanguage(lang);
  localStorage.setItem("language", lang);
};

export const isDefaultLanguage = (lang: string) => {
  return lang === SupportedLanguage.En;
};

export const isOtherLanguage = (lang: string) => {
  return lang !== SupportedLanguage.En;
};
