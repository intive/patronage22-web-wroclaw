import { CircularProgress, LinearProgress } from "@mui/material";

import * as Styled from "./styled";

export enum LoaderType {
  Circular = "circular",
  Linear = "linear"
}
export interface LoaderProps {
  type: LoaderType;
}

export const Loader: React.FC<LoaderProps> = ({ type }) => {
  const PROGRESS_TYPE = {
    [LoaderType.Circular]: <CircularProgress color='inherit' />,
    [LoaderType.Linear]: (
      <Styled.LinearLoaderWrapper>
        <LinearProgress color='inherit' />
      </Styled.LinearLoaderWrapper>
    )
  };

  return <Styled.LoaderWrapper>{PROGRESS_TYPE[type]}</Styled.LoaderWrapper>;
};
