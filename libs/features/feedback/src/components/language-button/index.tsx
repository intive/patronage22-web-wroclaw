import { SupportedLanguage } from "@patronage-web/shared";
import { changeLanguage } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

export const LanguageButton = () => {
  const { i18n } = useTranslation();

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
