import { Card } from "@mui/material";
import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

interface LiveResultsViewProps {
  data: FeedbackQuestionAnswers;
  timeToElapse: number;
  onTimeElapsed: () => void;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ data, timeToElapse, onTimeElapsed }) => {
  const { id, title, answers } = data;
  const questions = answers.map(answer => answer.title);
  const answersCounts = answers.map(answer => answer.count);

  return (
    <Card id={`diagram${id}`}>
      <Diagram labels={questions} title={title} data={answersCounts} type={DiagramType.Bar} />
      <Timer timeToElapse={timeToElapse} onTimeElapsed={onTimeElapsed} />
    </Card>
  );
};
