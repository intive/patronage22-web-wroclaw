import { Card } from "@mui/material";
import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

interface ReducerObj {
  titles: string[];
  counts: number[];
}

interface LiveResultsViewProps {
  data: FeedbackQuestionAnswers;
  timeToElapse: number;
  onTimeElapsed: () => void;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ data: { title, answers }, timeToElapse, onTimeElapsed }) => {
  const answersData = answers.reduce<ReducerObj>(
    (acc, item) => {
      acc.titles.push(item.title);
      acc.counts.push(item.count);
      return acc;
    },
    { titles: [], counts: [] }
  );

  return (
    <Card>
      <Diagram title={title} type={DiagramType.Bar} {...answersData} />
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Card>
  );
};
