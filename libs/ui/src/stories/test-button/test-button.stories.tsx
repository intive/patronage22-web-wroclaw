import { TestButton, TestButtonProps, TestButtonVariant } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const TestButtonStory = ({ variant, title }: TestButtonProps) => <TestButton variant={variant} title={title} />;

export default {
  title: "TestButton",
  component: TestButtonStory,
  args: {
    variant: TestButtonVariant.outlined,
    title: "Test button"
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(TestButtonVariant),
    }
  }
} as ComponentMeta<typeof TestButtonStory>;
