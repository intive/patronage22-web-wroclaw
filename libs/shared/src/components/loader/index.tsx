import { CircularProgress } from "@mui/material";

import * as Styled from "./styled";

export const Loader: React.FC = () => {
  return (
    <Styled.CenteredWrapper>
      <CircularProgress color='inherit' />
    </Styled.CenteredWrapper>
  );
};
