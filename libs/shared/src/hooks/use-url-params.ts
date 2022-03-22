import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SUPPORTED_PARAM_KEYS } from "../configs";
import { BaseQueryParams, Nullable } from "../types";
import { convertUrlParamsToString, filterByKeys, parseUrlParams } from "../utils";

export const useUrlParams = <TParams extends BaseQueryParams>(initialParams?: Nullable<TParams>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedParams = parseUrlParams(searchParams);

  const updateParams = (params: Nullable<TParams>, replace = false) => {
    const newParams = replace ? params : filterByKeys({ ...parsedParams, ...params }, SUPPORTED_PARAM_KEYS);

    setSearchParams(convertUrlParamsToString(newParams as Record<string, unknown>));
  };

  useEffect(() => {
    if (initialParams) {
      updateParams({ ...initialParams, ...parsedParams });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { params: filterByKeys(parsedParams, SUPPORTED_PARAM_KEYS), updateParams };
};
