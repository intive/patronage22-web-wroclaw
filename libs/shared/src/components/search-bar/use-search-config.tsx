import { useFeatureName } from "../../hooks";
import { FeatureName, FeedbackRoute } from "../../types";
import { ConfigSearchBar } from "./types";

const SEARCH_BAR_CONFIG: Record<FeatureName, ConfigSearchBar> = {
  [FeatureName.Feedback]: {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  },
  [FeatureName.ExternalFeedback]: null as never as ConfigSearchBar,
  // TODO replace by proper values when available
  [FeatureName.Default]: {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  }
};

export const useSearchConfig = () => {
  const featureName = useFeatureName();

  return featureName !== "feedback" && SEARCH_BAR_CONFIG[featureName];
};
