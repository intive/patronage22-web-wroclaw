import { Box } from "@mui/material";
import { LanguageButton } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { useTranslation } from "react-i18next";

const LanguageButtonTemplate = () => {
  const { t } = useTranslation("ui");

  return (
    <Box>
      <LanguageButton />
      <Box>{t("hello")}</Box>
    </Box>
  );
};

export default {
  title: "LanguageButton",
  component: LanguageButton,
  args: {}
} as ComponentMeta<typeof LanguageButton>;

export const LanguageButtonStory = LanguageButtonTemplate.bind({});
