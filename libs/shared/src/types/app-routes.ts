export enum FeatureName {
  Feedback = "feedback"
}

export enum FeedbackRoute {
  Dashboard = "dashboard",
  Presentation = "presentation",
  AddPresentation = "add-presentation",
  EditPresentation = "edit-presentation",
  ExternalUserPresentation = "external-user-presentation"
}

export enum BaseRoute {
  Home = "home",
  NotFound = "not-found"
}

export type AppRoute = BaseRoute | FeedbackRoute;

export const ROUTES = {
  [BaseRoute.Home]: "/",
  [BaseRoute.NotFound]: "*",
  [FeedbackRoute.Dashboard]: `/${FeatureName.Feedback}/dashboard`,
  [FeedbackRoute.Presentation]: `/${FeatureName.Feedback}/presentation`,
  [FeedbackRoute.AddPresentation]: "add",
  [FeedbackRoute.EditPresentation]: "edit/:id",
  [FeedbackRoute.ExternalUserPresentation]: ":id"
} as const;

export type Route = typeof ROUTES[AppRoute];
