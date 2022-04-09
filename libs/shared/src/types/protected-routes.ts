import { getAppRoute } from "../utils";
import { BaseRoute, FeedbackRoute } from "./app-routes";

export const PROTECTED_ROUTES = Object.freeze([
  BaseRoute.Home,
  FeedbackRoute.Dashboard,
  FeedbackRoute.Presentation,
  FeedbackRoute.AddPresentation,
  FeedbackRoute.EditPresentation
]);

export const PROTECTED_PATHS = [...PROTECTED_ROUTES.values()].map(route => getAppRoute(route));
