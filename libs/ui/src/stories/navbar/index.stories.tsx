import { navbarConfig } from "@patronage-web/features-feedback";
import { Navbar, NavbarProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const NavbarStory = ({ color, config, variant }: NavbarProps) => <Navbar color={color} config={config} variant={variant} />;

export default {
  title: "Navbar",
  component: NavbarStory,
  argTypes: {
    color: {
      control: { type: "select" },
      defaultValue: "transparent",
      options: ["inherit", "primary", "secondary", "default", "transparent"]
    },
    config: {
      defaultValue: navbarConfig
    },
    variant: {
      control: { type: "select" },
      defaultValue: "dense",
      options: ["regular", "dense"]
    }
  }
} as ComponentMeta<typeof NavbarStory>;
