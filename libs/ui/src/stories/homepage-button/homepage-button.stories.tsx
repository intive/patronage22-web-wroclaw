import { ButtonPropsVariantOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { HomepageButton } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const HomepageButtonStory = ({
  variant
}: {
  variant: OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides>;
}) => <HomepageButton variant={variant} />;

export default {
  title: "HomepageButton",
  component: HomepageButtonStory,
  argTypes: {
    variant: {
      defaultValue: "contained",
      description: "Variant for the button",
      options: ["outlined", "text", "contained"]
    }
  }
} as ComponentMeta<typeof HomepageButtonStory>;
