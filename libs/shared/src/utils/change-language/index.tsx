import i18next from "i18next";

export const changeLanguage = (lang: string) => {
  i18next.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
