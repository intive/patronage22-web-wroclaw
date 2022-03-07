import { Dash } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const DashboardStory: React.FC = () => {
  return <Dash />;
};

export default {
  title: "Dashboard",
  component: DashboardStory,
  args: {},
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof DashboardStory>;
