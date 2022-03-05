import { Grid } from "@mui/material";
import { Presentation } from "@patronage-web/shared";

import presentations from "../../../../../shared/data/features/feedback/mock/mock.json";
import * as Styled from "./styled";
import { Tile } from "./tile";

export const Dash = () => {
  return (
    <Styled.TileGrid container spacing={1}>
      {Object.values(presentations).map((presentation: Presentation) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={presentation.id}>
            <Tile presentation={presentation} />
          </Grid>
        );
      })}
    </Styled.TileGrid>
  );
};
