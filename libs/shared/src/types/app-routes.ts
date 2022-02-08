export enum AppRoute {
  Home = "/",
  Dashboard = "/dashboard",
  Presentation = "/presentation",
  AddPresentation = "add",
  EditPresentation = "edit/:id",
  PresentationForExternalUser = ":id",
  NotFound = "*"
}

export enum PagePath {
  Home = "home",
  Presentation = "presentation",
  AddPresentation = "add-presentation",
  EditPresentation = "edit-presentation",
  PresentationForExternalUser = "external-user-presentation",
  Dashboard = "dashboard"
}

export const PAGE_PATHS: Record<PagePath, AppRoute | AppRoute[]> = {
  [PagePath.Dashboard]: AppRoute.Dashboard,
  [PagePath.Home]: AppRoute.Home,
  [PagePath.Presentation]: AppRoute.Presentation,
  [PagePath.AddPresentation]: [AppRoute.Presentation, AppRoute.AddPresentation],
  [PagePath.EditPresentation]: [AppRoute.Presentation, AppRoute.EditPresentation],
  [PagePath.PresentationForExternalUser]: [AppRoute.Presentation, AppRoute.PresentationForExternalUser]
};
