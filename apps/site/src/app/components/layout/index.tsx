import { Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { FeatureName, PreviousPageButton, useFeatureName } from "@patronage-web/shared";

import { Layout as DefaultLayout } from "./default-layout";
import * as Styled from "./styled";

export const Layout: React.FC = ({ children }) => {
  const layouts = {
    [FeatureName.Feedback]: (
      <FeedbackLayout>
        <Styled.LayoutWrapper>
          <PreviousPageButton />
          {children}
        </Styled.LayoutWrapper>
      </FeedbackLayout>
    ),
    // TODO replace with proper external layout when will be ready
    [FeatureName.ExternalFeedback]: <FeedbackLayout>{children}</FeedbackLayout>,
    [FeatureName.Default]: <DefaultLayout>{children}</DefaultLayout>
  };

  return layouts[useFeatureName()];
};
