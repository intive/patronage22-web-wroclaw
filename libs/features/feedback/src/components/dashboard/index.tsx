import { Grid } from "@mui/material";
import { Presentation } from "@patronage-web/shared";
import { presentations } from "@patronage-web/shared-data";

import * as Styled from "./styled";
import { DashboardTile } from "./tile";

export const Dashboard = () => {
  return (
    <Styled.DashboardTileGrid container spacing={1}>
      {Object.values(presentations).map((presentation: Presentation) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={presentation.id}>
          <DashboardTile
            id={presentation.id}
            isPublic={presentation.isPublic}
            title={presentation.title}
            description={presentation.description}
            status={presentation.status}
          />
        </Grid>
      ))}
    </Styled.DashboardTileGrid>
  );
};
