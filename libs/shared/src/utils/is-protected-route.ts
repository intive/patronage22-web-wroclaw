import { Location, matchPath } from "react-router-dom";

import { PROTECTED_ROUTES } from "../types/protected-routes";

export const isProtectedRoute = (location: Location) =>
  PROTECTED_ROUTES.find(path => matchPath(path, location.pathname)) !== undefined;
