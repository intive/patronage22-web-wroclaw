import { AppRoute, FeedbackPath, PagePath, ROUTES } from "../types";

export const PAGE_PATHS: Record<PagePath, AppRoute | AppRoute[]> = {
  ...ROUTES,
  [FeedbackPath.AddPresentation]: [ROUTES.presentation, ROUTES["add-presentation"]],
  [FeedbackPath.EditPresentation]: [ROUTES.presentation, ROUTES["edit-presentation"]],
  [FeedbackPath.ExternalUserPresentation]: [ROUTES.presentation, ROUTES["external-user-presentation"]]
};
