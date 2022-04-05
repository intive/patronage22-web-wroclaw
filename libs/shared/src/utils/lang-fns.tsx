import { i18n } from "i18next";

import { LANG_FIRST_LETTER_POSITION, LANG_LAST_LETTER_POSITION } from "../constants";
import { SupportedLanguage } from "../types";

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
  return lang.slice(LANG_FIRST_LETTER_POSITION, LANG_LAST_LETTER_POSITION) !== SupportedLanguage.En;
};
