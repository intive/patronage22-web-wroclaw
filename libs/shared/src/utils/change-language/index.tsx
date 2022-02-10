import { SupportedLanguage } from "@patronage-web/shared";
import i18next from "i18next";

export const changeLanguage = (lang: SupportedLanguage) => {
  i18next.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
