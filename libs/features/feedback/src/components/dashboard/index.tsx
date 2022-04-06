import { presentationsMock } from "@patronage-web/shared-data";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const presentation: Presentation[] = presentationsMock;

export const Dashboard = () => (
  <Styled.FeedbackDashboardGrid container>
    {Object.values(presentation).map(({ id, isPublic, title, description, status }) => (
      <Styled.TileGrid key={id}>
        <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
      </Styled.TileGrid>
    ))}
  </Styled.FeedbackDashboardGrid>
);
