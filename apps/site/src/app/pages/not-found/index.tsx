import { CardMedia } from "@mui/material";
import { NotFoundImage } from "@patronage-web/features-feedback";

import * as Styled from "./styled";

export const NotFoundPage = () => {
  return (
    // sample data
    <Styled.CenteredWhiteWrapper>
      <Styled.MediumImageWrapper>
        <CardMedia component='img' alt='404' src={NotFoundImage} />
      </Styled.MediumImageWrapper>

      <h1>Page Not Found</h1>
    </Styled.CenteredWhiteWrapper>
  );
};
