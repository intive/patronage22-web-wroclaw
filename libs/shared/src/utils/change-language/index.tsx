import { SupportedLanguage } from "../../types/translations";

export const changeLanguage = (i18n: any, lang: SupportedLanguage) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
