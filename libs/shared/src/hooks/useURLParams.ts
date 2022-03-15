import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BaseQueryParams } from "../types";
import { deleteByKeys, filterByKeys } from "../utils";
import { useCurrentParams } from "./use-current-params";

export const useURLParams = <TParams extends BaseQueryParams>(paramKeys: (keyof TParams)[], URLParams?: TParams | null) => {
  const currentParams = useCurrentParams();
  const [queryParams, setQueryParams] = useState<TParams | null | undefined>({
    ...URLParams,
    ...filterByKeys<TParams>(currentParams, paramKeys)
  } as TParams);
  const [, setSearchParams] = useSearchParams();

  const setParams = (params: TParams, isNew?: boolean) => {
    if (!isEmpty(currentParams) && !isNew) {
      setSearchParams({ ...currentParams, ...params });
      setQueryParams({ ...queryParams, ...params });
    } else {
      setSearchParams(params as unknown as URLSearchParams);
      setQueryParams(params);
    }
  };

  const removeParams = (paramNames: (keyof TParams)[]) => {
    if (queryParams) {
      setQueryParams(deleteByKeys<TParams>(queryParams, paramNames as string[]));
      setSearchParams(deleteByKeys(currentParams, paramNames as string[]));
    }
  };

  useEffect(() => {
    if (queryParams) {
      setSearchParams({ ...currentParams, ...queryParams, ...currentParams });
    }
  }, [currentParams, queryParams, setSearchParams]);

  return { params: queryParams, setParams, removeParams };
};
