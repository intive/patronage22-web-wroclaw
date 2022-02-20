import { PagePath, ROUTES } from "../types";

export const getAppRoute = (path: PagePath) => {
  return ROUTES[path];
};
