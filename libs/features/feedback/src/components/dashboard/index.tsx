import { presentations } from "@patronage-web/shared-data";

import * as Styled from "./styled";
import { DashboardTile } from "./tile";

export const Dashboard = () => {
  return (
    <Styled.DashboardTileGrid container>
      {Object.values(presentations).map(({ id, isPublic, title, description, status }) => (
        <Styled.TileGrid item key={id}>
          <DashboardTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
        </Styled.TileGrid>
      ))}
    </Styled.DashboardTileGrid>
  );
};
