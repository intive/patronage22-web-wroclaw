import { Grid } from "@mui/material";
import { presentations } from "@patronage-web/shared-data";

import * as Styled from "./styled";
import { DashboardTile } from "./tile";

export const Dashboard = () => {
  return (
    <Styled.DashboardTileGrid container spacing={1}>
      {Object.values(presentations).map(({ id, isPublic, title, description, status }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <DashboardTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
        </Grid>
      ))}
    </Styled.DashboardTileGrid>
  );
};
