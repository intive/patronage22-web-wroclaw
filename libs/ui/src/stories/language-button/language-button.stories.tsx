import { LanguageButton } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const LanguageButtonStory = () => <LanguageButton />;

export default {
  title: "LanguageButton",
  component: LanguageButtonStory,
  args: {}
} as ComponentMeta<typeof LanguageButtonStory>;
