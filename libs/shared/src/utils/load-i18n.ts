import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { SupportedLanguage, TranslationNamespace } from "../types/translations";
interface I18nOptions {
  env: string | "development";
  ns: TranslationNamespace[];
}

const translationResources = {
  en: {
    [TranslationNamespace.Common]: require("../../../translations/src/common/en.json"),
    [TranslationNamespace.Feedback]: require("../../../translations/src/feedback/en.json")
  },
  pl: {
    [TranslationNamespace.Common]: require("../../../translations/src/common/pl.json"),
    [TranslationNamespace.Feedback]: require("../../../translations/src/feedback/pl.json")
  }
};

const localStorageLanguage = localStorage.getItem("language");
const savedLanguage = Object.values(SupportedLanguage).filter(lang => lang === localStorageLanguage);
export const language = savedLanguage[0];

export const loadI18n = ({ env, ns }: I18nOptions) => {
  i18n.use(initReactI18next).init({
    lng: language,
    fallbackLng: "en",
    supportedLngs: [SupportedLanguage.En, SupportedLanguage.Pl],
    load: "currentOnly",
    debug: env === "development",

    resources: translationResources,

    detection: {
      order: ["querystring", "sessionStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: []
    },

    ns,
    fallbackNS: TranslationNamespace.Common,

    react: {
      bindI18n: "languageChanged loaded",
      nsMode: "default"
    },

    interpolation: {
      escapeValue: false
    }
  });
};
