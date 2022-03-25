import { Card } from "@mui/material";
import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

interface LiveResultsViewProps {
  data: FeedbackQuestionAnswers;
  timeToElapse: number;
  onTimeElapsed: () => void;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ data: { id, title, answers }, timeToElapse, onTimeElapsed }) => {
  const answersData = answers.reduce(
    (total, item) => {
      total.answersTitles.push(item.title);
      total.answersCounts.push(item.count);
      return total;
    },
    { answersTitles: new Array<string>(), answersCounts: new Array<number>() }
  );

  return (
    <Card id={`diagram${id}`}>
      <Diagram title={title} type={DiagramType.Bar} {...answersData} />
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Card>
  );
};
