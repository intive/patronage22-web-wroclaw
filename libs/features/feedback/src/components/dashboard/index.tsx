import { mockPresentations } from "@patronage-web/shared-data";

import * as Styled from "./styled";
import { DashboardTile } from "./tile";

export const Dashboard = () => (
  <Styled.DashboardTileGrid container>
    {Object.values(mockPresentations).map(({ id, isPublic, title, description, status }) => (
      <Styled.TileGrid item key={id}>
        <DashboardTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
      </Styled.TileGrid>
    ))}
  </Styled.DashboardTileGrid>
);
