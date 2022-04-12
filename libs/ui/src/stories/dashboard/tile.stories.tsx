import { DashboardTile } from "@patronage-web/features-feedback";
import { presentationsMock } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const DashboardTileStory: React.FC = () => (
  <DashboardTile
    id={presentationsMock[0].id}
    isPublic={presentationsMock[0].isPublic}
    title={presentationsMock[0].title}
    description={presentationsMock[0].description}
    status={presentationsMock[0].status}
  />
);

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
