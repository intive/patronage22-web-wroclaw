import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { FeatureName, Notifications, useFeatureName } from "@patronage-web/shared";

import { Layout as DefaultLayout } from "./default-layout";

export const Layout: React.FC = ({ children }) => {
  const layouts = {
    [FeatureName.Feedback]: (
      <FeedbackLayout>
        {children}
        <Notifications />
      </FeedbackLayout>
    ),
    // TODO replace with proper external layout when will be ready
    [FeatureName.ExternalFeedback]: (
      <FeedbackLayout>
        {children}
        <Notifications />
      </FeedbackLayout>
    ),
    [FeatureName.Default]: (
      <DefaultLayout>
        {children}
        <Notifications />
      </DefaultLayout>
    )
  };

  return layouts[useFeatureName()];
};
