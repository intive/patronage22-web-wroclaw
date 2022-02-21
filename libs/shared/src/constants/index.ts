import { AppRoute, PagePath } from "../types";

export const PAGE_PATHS: Record<PagePath, AppRoute | AppRoute[]> = {
  [PagePath.Dashboard]: AppRoute.Dashboard,
  [PagePath.Home]: AppRoute.Home,
  [PagePath.Presentation]: AppRoute.Presentation,
  [PagePath.AddPresentation]: [AppRoute.Presentation, AppRoute.AddPresentation],
  [PagePath.EditPresentation]: [AppRoute.Presentation, AppRoute.EditPresentation],
  [PagePath.ExternalUserPresentation]: [AppRoute.Presentation, AppRoute.ExternalUserPresentation]
};
