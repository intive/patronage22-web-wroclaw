import { useLocation } from "react-router-dom";

import { FeatureName } from "../types";

const FEATURE_POSITION = 1;

export const useFeatureName = (): FeatureName => {
  const { pathname } = useLocation();
  const featureFromPath = pathname.split("/")[FEATURE_POSITION] as FeatureName;
  const isFeature = Object.values(FeatureName).includes(featureFromPath);
  const featureName = isFeature ? featureFromPath : FeatureName.Default;

  return featureName;
};
