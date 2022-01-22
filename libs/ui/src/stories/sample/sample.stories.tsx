import { SampleButton } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const SampleButtonStory = ({ textColor, title, variant }: { textColor: string; title: string; variant: string }) => (
  <SampleButton textColor={textColor} text={title} variant={variant} />
);

export default {
  title: "ButtonSample",
  component: SampleButtonStory,
  args: {
    title: "Button title"
  },
  argTypes: {
    textColor: { control: "color", defaultValue: "blue" },
    variant: {
      defaultValue: "white",
      description: "Variant for the button",
      options: ["white", "black"]
    }
  }
} as ComponentMeta<typeof SampleButtonStory>;
