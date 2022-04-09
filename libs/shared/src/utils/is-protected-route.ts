import { Location, matchPath } from "react-router-dom";

import { PROTECTED_PATHS } from "../types/protected-routes";

export const isProtectedRoute = (location: Location) => PROTECTED_PATHS.find(path => matchPath(path, location.pathname))?.length;
