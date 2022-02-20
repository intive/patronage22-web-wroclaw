import { StarsImage } from "@patronage-web/features-feedback";
import { ActionCard, ActionCardProps, FeedbackPath } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const ActionCardStory: React.FC<ActionCardProps> = ({ description, image, button }) => (
  <ActionCard description={description} image={image} button={button} />
);

export default {
  title: "ActionCard",
  component: ActionCardStory,
  args: {
    button: { variant: "contained", text: "Lorem ipsum", navigateTo: FeedbackPath.AddPresentation },
    description:
      "Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise."
  },
  argTypes: {
    image: {
      defaultValue: StarsImage
    }
  }
} as ComponentMeta<typeof ActionCardStory>;
