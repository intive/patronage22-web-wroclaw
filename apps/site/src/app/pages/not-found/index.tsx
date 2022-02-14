import { CardMedia } from "@mui/material";
import { NotFoundImage } from "@patronage-web/shared";

import * as Styled from "./styled";

const NotFoundPage: React.FC = () => {
  return (
    // TODO - replace when proper data will be delivered
    <>
      <Styled.MediumImageWrapper>
        <CardMedia component='img' alt='404' src={NotFoundImage} />
      </Styled.MediumImageWrapper>

      <h1>Page Not Found</h1>
    </>
  );
};

export default NotFoundPage;
