import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { FeatureName, useFeatureName } from "@patronage-web/shared";

import { DefaultLayout } from "../components/default-layout";

export const Layout: React.FC = ({ children }) => {
  const layouts = {
    [FeatureName.Feedback]: <FeedbackLayout>{children}</FeedbackLayout>,
    // TODO replace with proper external layout when will be ready
    [FeatureName.ExternalFeedback]: <FeedbackLayout>{children}</FeedbackLayout>,
    default: <DefaultLayout>{children}</DefaultLayout>
  };

  return layouts[useFeatureName()];
};
