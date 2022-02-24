import { generatePath, Params } from "react-router-dom";

import { AppRoute } from "../types";
import { buildQueryString } from "./build-query-string";

export const createPath = (path: AppRoute | AppRoute[], params?: Params, language?: string, search?: string) => {
  const queryString = buildQueryString(language, search);
  const basePath = path instanceof Array ? path.join("/") : path;

  return `${generatePath(`${basePath}`, params)}${queryString}`;
};
