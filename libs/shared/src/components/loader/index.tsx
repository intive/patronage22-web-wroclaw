import { CircularProgress, LinearProgress } from "@mui/material";

import { LoaderType } from "../../types";
import * as Styled from "./styled";

export interface LoaderProps {
  loaderType: LoaderType;
}

export const Loader: React.FC<LoaderProps> = ({ loaderType }) => {
  const PROGRESS_TYPE = {
    circular: <CircularProgress color='inherit' />,
    linear: (
      <Styled.LinearLoaderWrapper>
        <LinearProgress color='inherit' />
      </Styled.LinearLoaderWrapper>
    )
  };

  return <Styled.LoaderWrapper>{PROGRESS_TYPE[loaderType]}</Styled.LoaderWrapper>;
};
