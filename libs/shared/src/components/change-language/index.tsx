import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SupportedLanguage } from "@patronage-web/shared";

export function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const checkLocalStorage = () => {
    const lang = localStorage.getItem("language");
    if (lang === SupportedLanguage.Pl) {
      return SupportedLanguage.En;
    } else {
      return SupportedLanguage.Pl;
    }
  };

  const [language, setLanguage] = useState<string>(checkLocalStorage);

  const changeLanguage = () => {
    i18n.changeLanguage(language);
    language === SupportedLanguage.Pl ? setLanguage(SupportedLanguage.En) : setLanguage(SupportedLanguage.Pl);
    localStorage.setItem("language", language);
  };

  return;
}
