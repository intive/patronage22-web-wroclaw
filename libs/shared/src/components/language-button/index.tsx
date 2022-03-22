import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { useUrlParams } from "../../hooks";
import { SupportedLanguage } from "../../types";
import { changeLanguage, isOtherLanguage } from "../../utils";

export const LanguageButton = () => {
  const { i18n } = useTranslation();

  const getCurrentLang = () => {
    const isOtherLang = i18n.language?.length && isOtherLanguage(i18n.language);

    return { lang: isOtherLang ? i18n.language : "" };
  };

  const { updateParams } = useUrlParams(getCurrentLang());

  const handleChange = (_event: MouseEvent<HTMLElement>, value: SupportedLanguage) => {
    if (value) {
      changeLanguage(i18n, value);
      updateParams(getCurrentLang());
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
