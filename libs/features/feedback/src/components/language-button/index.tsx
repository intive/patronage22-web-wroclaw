import { SupportedLanguage } from "@patronage-web/shared";
import { changeLanguage } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    i18n.language?.length && i18n.language !== SupportedLanguage.En
      ? setSearchParams({ lang: i18n.language })
      : setSearchParams({});
  }, [i18n.language]);

  return (
    <ToggleButtonGroup color='primary' size='small' value={i18n.language} exclusive>
      {Object.values(SupportedLanguage).map(language => (
        <ToggleButton key={language} value={language} onClick={() => changeLanguage(language)}>
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
