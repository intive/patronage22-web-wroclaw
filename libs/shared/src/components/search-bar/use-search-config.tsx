import { useFeatureName } from "../../hooks/use-feature-name";
import { FeatureName, FeedbackRoute } from "../../types";
import { ConfigSearchBar } from "./types";

export const SEARCH_BAR_CONFIG: Record<Exclude<FeatureName, "feedback-external">, ConfigSearchBar> = {
  feedback: { searchKey: "title", allResultsPage: FeedbackRoute.Dashboard, singleResultPage: FeedbackRoute.EditPresentation },
  // TODO replace by proper values when available
  default: { searchKey: "title", allResultsPage: FeedbackRoute.Dashboard, singleResultPage: FeedbackRoute.EditPresentation }
};

export const useSearchConfig = () => {
  const featureName = useFeatureName();

  return featureName !== "feedback-external" ? SEARCH_BAR_CONFIG[featureName] : SEARCH_BAR_CONFIG.default;
};
