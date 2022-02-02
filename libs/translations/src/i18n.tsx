import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

let language: string | null = localStorage.getItem("language");
if (!language) {
  language = "en";
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "libs/translations/src/feedback/{{ns}}.json"
    }
  });

export default i18n;
