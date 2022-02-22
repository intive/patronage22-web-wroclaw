import { BasicPresentationInfo } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const BasicPresentationInfoStory: React.FC = () => <BasicPresentationInfo />;

export default {
  title: "Basic presentation info",
  component: BasicPresentationInfoStory
} as ComponentMeta<typeof BasicPresentationInfoStory>;
