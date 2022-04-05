export enum FeatureName {
  Default = "default",
  Feedback = "feedback",
  ExternalFeedback = "feedback-external"
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
  NotFound = "not-found",
  Login = "login"
}

export type AppRouteType = BaseRoute | FeedbackRoute;

export const ROUTES: Record<AppRouteType, string | string[]> = {
  [BaseRoute.Home]: "/",
  [BaseRoute.NotFound]: "*",
  [BaseRoute.Login]: "/login",
  [FeedbackRoute.Dashboard]: [`/${FeatureName.Feedback}`, "/dashboard"],
  [FeedbackRoute.Presentation]: [`/${FeatureName.Feedback}`, "/presentation"],
  [FeedbackRoute.AddPresentation]: [`/${FeatureName.Feedback}`, "/presentation", "/add"],
  [FeedbackRoute.ExternalUserPresentation]: [`/${FeatureName.ExternalFeedback}`, "/presentation", "/:id"],
  [FeedbackRoute.EditPresentation]: [`/${FeatureName.Feedback}`, "/presentation", "/edit/:id"]
};

export const PROTECTED_ROUTES = [
  "/",
  [`/${FeatureName.Feedback}`, "/dashboard"].join(""),
  [`/${FeatureName.Feedback}`, "/presentation"].join(""),
  [`/${FeatureName.Feedback}`, "/presentation", "/add"].join(""),
  [`/${FeatureName.ExternalFeedback}`, "/presentation", "/:id"].join(""),
  [`/${FeatureName.Feedback}`, "/presentation", "/edit/:id"].join("")
];
