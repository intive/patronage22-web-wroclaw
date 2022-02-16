import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { changeLanguage, SupportedLanguage } from "@patronage-web/shared";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [, setSearchParams] = useSearchParams();

  const isDefaultLanguage = i18n.language?.length && i18n.language !== SupportedLanguage.En ? `?lang=${i18n.language}` : "";

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: SupportedLanguage) => {
    changeLanguage(i18n, value);
  };

  useEffect(() => {
    setSearchParams(isDefaultLanguage);
  }, [i18n.language, isDefaultLanguage, setSearchParams]);

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
