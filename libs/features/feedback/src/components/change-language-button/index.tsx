import React from "react";
import { SupportedLanguage } from "@patronage-web/shared";
import { changeLanguage } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ChangeLanguageButton = () => {
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  const handleSelection = (event: React.MouseEvent<HTMLElement>, newSelectedLanguage: string) => {
    if (newSelectedLanguage !== null) {
      setSelectedLanguage(newSelectedLanguage);
    }
  };

  return (
    <ToggleButtonGroup color='primary' size='small' value={selectedLanguage} exclusive onChange={handleSelection}>
      {Object.values(SupportedLanguage).map(language => (
        <ToggleButton key={language} value={language} onClick={() => changeLanguage(language)}>
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
