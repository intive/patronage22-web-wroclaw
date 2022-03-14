import { DashboardTile } from "@patronage-web/features-feedback";
import { presentations } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const DashboardTileStory: React.FC = () => {
  return (
    <DashboardTile
      id={presentations[0].id}
      isPublic={presentations[0].isPublic}
      title={presentations[0].title}
      description={presentations[0].description}
      status={presentations[0].status}
    />
  );
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
