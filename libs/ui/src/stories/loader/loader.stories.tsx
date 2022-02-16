import { Loader, LoaderProps, LoaderType } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const LoaderStory: React.FC<LoaderProps> = ({ type }) => <Loader type={type} />;

export default {
  title: "Loader",
  component: LoaderStory,
  argTypes: {
    type: {
      control: { type: "select" },
      defaultValue: LoaderType.Circular,
      options: [LoaderType.Circular, LoaderType.Linear]
    }
  }
} as ComponentMeta<typeof LoaderStory>;
