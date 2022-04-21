import { getAppRoute } from "../utils";
import { BaseRoute, FeedbackRoute } from "./app-routes";

export const PROTECTED_ROUTES = Object.freeze([
  getAppRoute(BaseRoute.Home),
  getAppRoute(FeedbackRoute.Dashboard),
  getAppRoute(FeedbackRoute.Presentation),
  getAppRoute(FeedbackRoute.AddPresentation),
  getAppRoute(FeedbackRoute.EditPresentation)
]);
