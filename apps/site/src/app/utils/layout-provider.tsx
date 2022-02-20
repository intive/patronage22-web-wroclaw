import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { BasicLayoutProps, FeatureName, getFeatureFromPath } from "@patronage-web/shared";
import { useLocation } from "react-router-dom";

import { DefaultLayout } from "../components/default-layout";

export interface LayoutProviderProps {
  children: BasicLayoutProps["children"];
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const { pathname } = useLocation();
  const LAYOUTS = {
    [FeatureName.Feedback]: <FeedbackLayout>{children}</FeedbackLayout>,
    default: <DefaultLayout>{children}</DefaultLayout>
  };

  return LAYOUTS[getFeatureFromPath(pathname)] || LAYOUTS.default;
};
