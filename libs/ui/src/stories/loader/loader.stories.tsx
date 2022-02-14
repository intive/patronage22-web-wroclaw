import { Loader } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const LoaderStory: React.FC = () => <Loader />;

export default {
  title: "Loader",
  component: LoaderStory
} as ComponentMeta<typeof LoaderStory>;
