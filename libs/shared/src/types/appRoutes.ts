export enum AppRoute {
  HomePage = "/",
  Dashboard = "/dashboard",
  Presentation = "/presentation",
  AddPresentation = "add",
  EditPresentation = "edit/:id",
  PresentationForExternalUser = ":id",
  NotFound = "/notFound",
  Fallback = "*"
}
