import { useFeatureName } from "../../hooks";
import { FeatureName, FeedbackRoute } from "../../types";
import { ConfigSearchBar } from "./types";

const SEARCH_BAR_CONFIG: Record<Exclude<FeatureName, FeatureName.ExternalFeedback>, ConfigSearchBar> = {
  [FeatureName.Feedback]: {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  },
  // TODO replace by proper values when available
  [FeatureName.Default]: {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  }
};

export const useSearchConfig = () => {
  const featureName = useFeatureName();

  return featureName !== FeatureName.ExternalFeedback ? SEARCH_BAR_CONFIG[featureName] : SEARCH_BAR_CONFIG[FeatureName.Default];
};
