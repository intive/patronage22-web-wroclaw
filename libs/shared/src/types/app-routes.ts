export enum AppRoute {
  Home = "/",
  Dashboard = "/dashboard",
  Presentation = "/presentation",
  AddPresentation = "add",
  EditPresentation = "edit/:id",
  ExternalUserPresentation = ":id",
  NotFound = "*"
}

export enum PagePath {
  Home = "home",
  Presentation = "presentation",
  AddPresentation = "add-presentation",
  EditPresentation = "edit-presentation",
  ExternalUserPresentation = "external-user-presentation",
  Dashboard = "dashboard"
}
