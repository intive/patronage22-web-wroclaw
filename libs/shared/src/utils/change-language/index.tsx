import i18next from "i18next";
import { SupportedLanguage } from "@patronage-web/shared";

export const changeLanguage = (lang: SupportedLanguage) => {
  i18next.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
