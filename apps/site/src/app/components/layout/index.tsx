import { ExternalLayout as ExternalFeedbackLayout, Layout as FeedbackLayout } from "@patronage-web/features-feedback";
import { ContentBox, FeatureName, PreviousPageButton, useFeatureName } from "@patronage-web/shared";

import { Layout as DefaultLayout } from "./default-layout";
import * as Styled from "./styled";

export const Layout: React.FC = ({ children }) => {
  const layouts = {
    [FeatureName.Feedback]: (
      <FeedbackLayout>
        <Styled.PreviousPageWrapper>
          <PreviousPageButton />
        </Styled.PreviousPageWrapper>
        <ContentBox>{children}</ContentBox>
      </FeedbackLayout>
    ),
    [FeatureName.ExternalFeedback]: <ExternalFeedbackLayout>{children}</ExternalFeedbackLayout>,
    [FeatureName.Default]: <DefaultLayout>{children}</DefaultLayout>
  };

  return layouts[useFeatureName()];
};
