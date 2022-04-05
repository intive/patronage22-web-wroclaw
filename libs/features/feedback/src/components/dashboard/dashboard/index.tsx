import { presentationsMock } from "@patronage-web/shared-data";

import { PresentationTile } from "../tile";
import * as Styled from "./styled";

// TODO - replace with redux action when ready
const presentation = presentationsMock;

export const Dashboard = () => (
  <Styled.FeedbackDashboardGrid container>
    {Object.values(presentation).map(({ id, isPublic, title, description, status }) => (
      <Styled.TileGrid item key={id}>
        <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
      </Styled.TileGrid>
    ))}
  </Styled.FeedbackDashboardGrid>
);
