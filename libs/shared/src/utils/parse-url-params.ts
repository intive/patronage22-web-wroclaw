import { URLSearchParams as URLQueryParams } from "url";

export const parseUrlParams = (params: URLSearchParams) => Object.fromEntries(params as URLQueryParams);
