import { isEmpty } from "lodash";
import { URLSearchParams as URLQueryParams } from "url";

import { Nullable } from "../types";

export const parseUrlParams = (params: URLSearchParams) => Object.fromEntries(params as URLQueryParams);

export const convertUrlParamsToString = (params: Nullable<Record<string, unknown>>) => {
  if (isEmpty(params) || !params) {
    return "";
  }

  return `?${Object.entries(params).reduce((acc, [key, value], index) => {
    const prefix = index > 0 ? "&" : "";

    return `${acc}${prefix}${key}=${value}`;
  }, "")}`;
};
