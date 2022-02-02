import { Button } from "@mui/material";
import React from "react";
import "libs/translations/src/i18n.tsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(() => {
    const lang = localStorage.getItem("language");
    if (lang === "pl") {
      return "en";
    } else {
      return "pl";
    }
  });

  const changeLanguage = () => {
    i18n.changeLanguage(language);
    language === "pl" ? setLanguage("en") : setLanguage("pl");
    localStorage.setItem("language", language);
  };

  return;
}

export default ChangeLanguage;
