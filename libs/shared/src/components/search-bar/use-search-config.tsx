import { useFeatureName } from "../../hooks";
import { FeatureName, FeedbackRoute } from "../../types";
import { ConfigSearchBar } from "./types";

export const useSearchConfig = () => {
  const featureName = useFeatureName();

  // TODO replace by proper values when available
  const DEFAULT_CONFIG: ConfigSearchBar = {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  };

  const CONFIGS: Partial<Record<FeatureName, ConfigSearchBar>> = {
    [FeatureName.Feedback]: {
      searchKey: "title",
      allResultsPage: FeedbackRoute.Dashboard,
      singleResultPage: FeedbackRoute.EditPresentation
    },
    [FeatureName.Default]: DEFAULT_CONFIG
  };

  return CONFIGS[featureName] ?? DEFAULT_CONFIG;
};
