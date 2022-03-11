import { Box, Button } from "@mui/material";
import { ThemeProvider, ThemeSelector } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { useTranslation } from "react-i18next";

export default {
  title: "ThemeSelector",
  component: ThemeSelector
} as ComponentMeta<typeof ThemeSelector>;

const ThemeSelectorTemplate = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Box>
        <ThemeSelector />
        <Button variant='contained'>{t("sampleText")}</Button>
      </Box>
    </ThemeProvider>
  );
};

export const ThemeSelectorDemo = ThemeSelectorTemplate.bind({});
