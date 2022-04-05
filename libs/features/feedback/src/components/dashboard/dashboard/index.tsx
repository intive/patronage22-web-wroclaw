import { presentationsMock } from "@patronage-web/shared-data";

import { DashboardTile } from "../tile";
import * as Styled from "./styled";

// TODO - replace with redux action when ready
const presentation = presentationsMock;

export const Dashboard = () => (
  <Styled.DashboardTileGrid container>
    {Object.values(presentation).map(({ id, isPublic, title, description, status }) => (
      <Styled.TileGrid item key={id}>
        <DashboardTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
      </Styled.TileGrid>
    ))}
  </Styled.DashboardTileGrid>
);
