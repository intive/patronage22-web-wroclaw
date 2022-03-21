import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { SupportedLanguage } from "../../types";
import { changeLanguage, isOtherLanguage } from "../../utils";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [, setSearchParams] = useSearchParams();

  const isOtherLang = i18n.language?.length && isOtherLanguage(i18n.language);
  const langQueryString = isOtherLang ? `?lang=${i18n.language}` : "";

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: SupportedLanguage) => {
    changeLanguage(i18n, value);
  };

  useEffect(() => {
    setSearchParams(langQueryString, { replace: true });
  }, [i18n.language, langQueryString, setSearchParams]);

  return (
    <ToggleButtonGroup color='primary' size='small' value={i18n.language} onChange={handleChange} exclusive>
      {Object.values(SupportedLanguage).map(language => (
        <ToggleButton key={language} value={language}>
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
