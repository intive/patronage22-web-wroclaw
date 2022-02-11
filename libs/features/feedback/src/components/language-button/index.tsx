import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { changeLanguage, SupportedLanguage } from "@patronage-web/shared";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [, setSearchParams] = useSearchParams();

  const languageQueryString = i18n.language?.length && i18n.language !== SupportedLanguage.En ? `?lang=${i18n.language}` : "";

  useEffect(() => {
    setSearchParams(languageQueryString);
  }, [i18n.language, languageQueryString, setSearchParams]);

  return (
    <ToggleButtonGroup color='primary' size='small' value={i18n.language} exclusive>
      {Object.values(SupportedLanguage).map(language => (
        <ToggleButton key={language} value={language} onClick={() => changeLanguage(i18n.changeLanguage, language)}>
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
