import { TitleAndDescriptionForm } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const TitleAndDescriptionStory: React.FC = () => <TitleAndDescriptionForm />;

export default {
  title: "Title and description",
  component: TitleAndDescriptionStory
} as ComponentMeta<typeof TitleAndDescriptionStory>;
