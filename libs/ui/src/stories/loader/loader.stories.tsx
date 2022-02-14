import { Loader, LoaderProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const LoaderStory: React.FC<LoaderProps> = ({ loaderType }) => <Loader loaderType={loaderType} />;

export default {
  title: "Loader",
  component: LoaderStory,
  argTypes: {
    loaderType: {
      control: { type: "select" },
      defaultValue: "circular",
      options: ["circular", "linear"]
    }
  }
} as ComponentMeta<typeof LoaderStory>;
