import { TestButton, TestButtonProps } from "@patronage-web/features-feedback";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from "@storybook/react";

export const TestButtonStory = ({ variant, title }: TestButtonProps) => <TestButton variant={variant} title={title} />;

export default {
  title: "TestButton",
  component: TestButtonStory,
  args: {
    variant: "contained",
    title: "Test button"
  }
} as ComponentMeta<typeof TestButtonStory>;
