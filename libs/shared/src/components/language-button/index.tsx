import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useURLParams } from "../../hooks";
import { SupportedLanguage } from "../../types";
import { changeLanguage, isOtherLanguage } from "../../utils";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const isOtherLang = i18n.language?.length && isOtherLanguage(i18n.language);
  const { setParams, removeParams } = useURLParams(["lang"], isOtherLang ? { lang: i18n.language } : null);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: SupportedLanguage) => {
    if (value) {
      changeLanguage(i18n, value);
      if (!isOtherLang) {
        setParams({ lang: value });
      } else {
        removeParams(["lang"]);
      }
    }
  };

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
