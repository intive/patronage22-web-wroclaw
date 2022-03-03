import { ConfigSearchBar } from "../components/search-bar/types";
import { FeatureName, FeedbackRoute } from "../types";

export const SEARCH_CONFIG = {
  limit: 5,
  offset: 0,
  /**
   * The minimum number of chars in search string to trigger search
   */
  minMatch: 3
};

export const SEARCH_BAR_CONFIG: Record<FeatureName, ConfigSearchBar> = {
  feedback: { searchKey: "title", allResultsPage: FeedbackRoute.Dashboard, singleResultPage: FeedbackRoute.EditPresentation },
  /**
   * should be replaced by proper values
   */
  "feedback-external": {
    searchKey: "title",
    allResultsPage: FeedbackRoute.Dashboard,
    singleResultPage: FeedbackRoute.EditPresentation
  },
  default: { searchKey: "title", allResultsPage: FeedbackRoute.Dashboard, singleResultPage: FeedbackRoute.EditPresentation }
};
