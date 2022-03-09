import { Dashboard } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const DashboardStory: React.FC = () => {
  return <Dashboard />;
};

export default {
  title: "FeedbackDashboard",
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
