export enum FeatureName {
  Feedback = "feedback"
}

export enum FeedbackPath {
  Dashboard = "dashboard",
  Presentation = "presentation",
  AddPresentation = "add-presentation",
  EditPresentation = "edit-presentation",
  ExternalUserPresentation = "external-user-presentation"
}

export enum BasePath {
  Home = "home",
  NotFound = "not-found"
}

export type PagePath = BasePath | FeedbackPath;

export const ROUTES = {
  [BasePath.Home]: "/",
  [BasePath.NotFound]: "*",
  [FeedbackPath.Dashboard]: `/${FeatureName.Feedback}/dashboard`,
  [FeedbackPath.Presentation]: `/${FeatureName.Feedback}/presentation`,
  [FeedbackPath.AddPresentation]: "add",
  [FeedbackPath.EditPresentation]: "edit/:id",
  [FeedbackPath.ExternalUserPresentation]: ":id"
} as const;

export type AppRoute = typeof ROUTES[PagePath];
