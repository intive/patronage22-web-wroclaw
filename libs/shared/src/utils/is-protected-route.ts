import { Location } from "react-router-dom";

import { PROTECTED_ROUTES } from "../types/protected-routes";

export const isProtectedRoute = (location: Location) => PROTECTED_ROUTES.includes(location.pathname);
