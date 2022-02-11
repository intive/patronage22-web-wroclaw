import { SupportedLanguage } from "@patronage-web/shared";

export const changeLanguage = (changeLanguageFunc: (lang: SupportedLanguage) => void, lang: SupportedLanguage) => {
  changeLanguageFunc(lang);
  localStorage.setItem("language", lang);
};
