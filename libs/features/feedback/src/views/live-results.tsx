import { Box, Card } from "@mui/material";
import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

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
    <Box>
      <Card>
        <Diagram title={title} type={DiagramType.Bar} {...answersData} />
      </Card>
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Box>
  );
};
