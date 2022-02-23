import { useLocation } from "react-router-dom";

import { FeatureName } from "../types";

const FEATURE_POSITION = 1;

export const useFeatureName = (): FeatureName | "default" => {
  const { pathname } = useLocation();
  const featureName = pathname.split("/")[FEATURE_POSITION] as FeatureName;

  return featureName || "default";
};
