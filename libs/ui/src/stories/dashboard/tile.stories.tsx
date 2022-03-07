import { ComponentMeta } from "@storybook/react";

import { Tile } from "../../../../features/feedback/src/components/dashboard/tile";
import presentations from "../../../../shared/data/features/feedback/mock/mock.json";

export const DashboardTileStory: React.FC = () => {
  return <Tile presentation={presentations[0]} />;
};

export default {
  title: "DashboardTile",
  component: DashboardTileStory,
  decorators: [
    Story => (
      <div style={{ maxWidth: "fit-content" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof DashboardTileStory>;
