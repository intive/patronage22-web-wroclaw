export enum AppRoute {
  Home = "/",
  Dashboard = "/dashboard",
  Presentation = "/presentation",
  AddPresentation = "add",
  EditPresentation = "edit/:id",
  PresentationForExternalUser = ":id",
  NotFound = "*"
}
