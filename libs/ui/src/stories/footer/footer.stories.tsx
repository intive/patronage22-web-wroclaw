import { footerConfig } from "@patronage-web/features-feedback";
import { Footer, FooterProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const FooterStory = ({ color, config }: FooterProps) => <Footer color={color} config={config} />;

export default {
  title: "Footer",
  component: FooterStory,
  argTypes: {
    color: {
      control: { type: "select" },
      defaultValue: "primary",
      options: ["inherit", "primary", "secondary", "default", "transparent"]
    },
    config: {
      defaultValue: footerConfig
    }
  }
} as ComponentMeta<typeof FooterStory>;
