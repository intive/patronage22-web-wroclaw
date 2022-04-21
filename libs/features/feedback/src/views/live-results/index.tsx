import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

import * as Styled from "./styled";

interface LiveResultsData {
  labels: string[];
  values: number[];
}

interface LiveResultsViewProps {
  data: FeedbackQuestionAnswers;
  timeToElapse: number;
  onTimeElapsed: () => void;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ data: { title, answers }, timeToElapse, onTimeElapsed }) => {
  const answersData = answers.reduce<LiveResultsData>(
    (acc, item) => {
      acc.labels.push(item.title);
      acc.values.push(item.count);

      return acc;
    },
    { labels: [], values: [] }
  );

  return (
    <Styled.LiveResultsContainer>
      <Styled.DiagramCard>
        <Diagram title={title} type={DiagramType.Bar} {...answersData} />
      </Styled.DiagramCard>
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Styled.LiveResultsContainer>
  );
};
