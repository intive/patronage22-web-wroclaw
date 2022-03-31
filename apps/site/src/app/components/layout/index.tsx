import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { FeatureName, LogoutButton, PreviousPageButton, useFeatureName } from "@patronage-web/shared";

import { Layout as DefaultLayout } from "./default-layout";

export const Layout: React.FC = ({ children }) => {
  const layouts = {
    [FeatureName.Feedback]: (
      <FeedbackLayout>
        <PreviousPageButton />
        <LogoutButton />
        {children}
      </FeedbackLayout>
    ),
    // TODO replace with proper external layout when will be ready
    [FeatureName.ExternalFeedback]: <FeedbackLayout>{children}</FeedbackLayout>,
    [FeatureName.Default]: <DefaultLayout>{children}</DefaultLayout>
  };

  return layouts[useFeatureName()];
};
