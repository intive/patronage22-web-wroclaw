import { DashboardTile } from "@patronage-web/features-feedback";
import { presentations } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const DashboardTileStory: React.FC = () => {
  return <DashboardTile presentation={presentations[0]} />;
};

export default {
  title: "FeedbackDashboardTile",
  component: DashboardTileStory,
  decorators: [
    Story => (
      <div style={{ maxWidth: "fit-content" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof DashboardTileStory>;
