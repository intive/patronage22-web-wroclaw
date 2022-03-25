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
      total.questionsTitles.push(item.title);
      total.questionsCounts.push(item.count);
      return total;
    },
    { questionsTitles: new Array<string>(), questionsCounts: new Array<number>() }
  );

  return (
    <Card id={`diagram${id}`}>
      <Diagram title={title} type={DiagramType.Bar} {...answersData} />
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Card>
  );
};
