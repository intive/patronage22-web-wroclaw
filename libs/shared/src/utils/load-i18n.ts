/* eslint-disable global-require */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { SupportedLanguage, TranslationNamespace } from "../types";

interface I18nOptions {
  env: string | "development";
  ns: TranslationNamespace[];
}

const translationResources = {
  en: {
    [TranslationNamespace.Common]: require("../../../translations/src/common/en.json"),
    [TranslationNamespace.Feedback]: require("../../../translations/src/feedback/en.json"),
    [TranslationNamespace.Ui]: require("../../../translations/src/ui/en.json")
  },
  pl: {
    [TranslationNamespace.Common]: require("../../../translations/src/common/pl.json"),
    [TranslationNamespace.Feedback]: require("../../../translations/src/feedback/pl.json"),
    [TranslationNamespace.Ui]: require("../../../translations/src/ui/pl.json")
  }
};

export const loadI18n = ({ env, ns }: I18nOptions) => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: [SupportedLanguage.En, SupportedLanguage.Pl],
      load: "languageOnly",
      debug: env === "development",

      resources: translationResources,

      detection: {
        order: ["querystring", "localStorage", "navigator"],
        lookupQuerystring: "lang",
        lookupLocalStorage: "language",
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
