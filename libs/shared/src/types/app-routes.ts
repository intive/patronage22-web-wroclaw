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
