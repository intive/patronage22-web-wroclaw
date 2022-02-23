export enum FeatureName {
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
  NotFound = "not-found"
}

export type AppRouteType = BaseRoute | FeedbackRoute;

export const ROUTES: Record<AppRouteType, string | string[]> = {
  [BaseRoute.Home]: "/",
  [BaseRoute.NotFound]: "*",
  [FeedbackRoute.Dashboard]: [FeatureName.Feedback, "/dashboard"],
  [FeedbackRoute.Presentation]: [FeatureName.Feedback, "/presentation"],
  [FeedbackRoute.AddPresentation]: [FeatureName.Feedback, "/presentation", "/add"],
  [FeedbackRoute.ExternalUserPresentation]: [FeatureName.ExternalFeedback, "/presentation", "/:id"],
  [FeedbackRoute.EditPresentation]: [FeatureName.Feedback, "/presentation", "/edit/:id"]
};
