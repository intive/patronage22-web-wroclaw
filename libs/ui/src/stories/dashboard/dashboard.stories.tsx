import { Dashboard } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const DashboardStory: React.FC = () => <Dashboard />;

export default {
  title: "FeedbackDashboard",
  component: DashboardStory
} as ComponentMeta<typeof DashboardStory>;
