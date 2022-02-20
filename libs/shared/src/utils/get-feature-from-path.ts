import { FeatureName } from "../types";

export const getFeatureFromPath = (pathname: string) => {
  return pathname.split("/")[1] as FeatureName;
};
