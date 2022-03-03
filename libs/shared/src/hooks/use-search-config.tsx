import { SEARCH_BAR_CONFIG } from "../constants";
import { useFeatureName } from "./use-feature-name";

export const useSearchConfig = () => {
  const featureName = useFeatureName();

  return SEARCH_BAR_CONFIG[featureName];
};
