import { AppRoute, FeedbackRoute, Route, ROUTES } from "../types";

export const PAGE_PATHS: Record<AppRoute, Route | Route[]> = {
  ...ROUTES,
  [FeedbackRoute.AddPresentation]: [ROUTES[FeedbackRoute.Presentation], ROUTES[FeedbackRoute.AddPresentation]],
  [FeedbackRoute.EditPresentation]: [ROUTES[FeedbackRoute.Presentation], ROUTES[FeedbackRoute.EditPresentation]],
  [FeedbackRoute.ExternalUserPresentation]: [ROUTES[FeedbackRoute.Presentation], ROUTES[FeedbackRoute.EditPresentation]]
};
